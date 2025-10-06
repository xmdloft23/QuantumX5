import configManager from '../utils/manageConfigs.js';
import channelSender from '../commands/channelSender.js';

// Expanded emoji pool
const EMOJI_POOL = [
  '👻', '😹', '🩸', '💦', '💔', '💫', '😃',
  '😂', '😍', '😎', '🥳', '🤓', '😜', '😺',
  '🌟', '✨', '🔥', '🍀', '💚', '💖', '🎉',
  '😻', '🥰', '😇', '🤩', '🙀', '💥', '⚡️'
];

// Function to get random emoji
const getRandomEmoji = () => {
  return EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)];
};

// Simple emoji regex (works for most cases)
function isEmoji(str) {
  const emojiRegex = /^(?:\p{Emoji_Presentation}|\p{Extended_Pictographic})$/u;
  return emojiRegex.test(str);
}

export async function auto(message, client, cond) {
  try {
    const remoteJid = message.key?.remoteJid;
    
    if (!remoteJid) {
      throw new Error("Message JID is undefined");
    }

    if (cond) {
      await client.sendMessage(remoteJid, {
        react: {
          text: getRandomEmoji(),
          key: message.key
        }
      });
    }
  } catch (error) {
    console.error('Error in auto react:', error);
    // Silently fail to avoid spamming users with error messages
  }
}

export async function autoreact(message, client) {
  const number = client.user.id.split(':')[0];
  const remoteJid = message.key?.remoteJid;

  try {
    if (!remoteJid) {
      throw new Error("Message JID is undefined");
    }

    const messageBody = 
      message.message?.extendedTextMessage?.text ||
      message.message?.conversation ||
      '';

    if (!messageBody.startsWith('!autoreact')) {
      return;
    }

    const commandAndArgs = messageBody.slice(1).trim();
    const parts = commandAndArgs.split(/\s+/);
    const args = parts.slice(1);

    if (args.length === 0) {
      throw new Error("Please provide 'on' or 'off'");
    }

    const input = args[0].toLowerCase();

    // Initialize user config if it doesn't exist
    if (!configManager.config.users[number]) {
      configManager.config.users[number] = { autoreact: false };
    }

    const userConfig = configManager.config.users[number];

    if (input === 'on' || input === 'off') {
      userConfig.autoreact = input === 'on';
      configManager.save();
      
      await channelSender(
        message,
        client,
        `Auto-react has been turned *${input.toUpperCase()}*. Will use random emojis from a pool of ${EMOJI_POOL.length} emojis.`,
        3
      );
    } else {
      await client.sendMessage(remoteJid, {
        text: "*Please use: !autoreact on|off*"
      });
    }
  } catch (error) {
    await client.sendMessage(remoteJid, {
      text: `❌ Error: ${error.message}. Usage: !autoreact on|off`
    });
  }
}

export default { auto, autoreact };