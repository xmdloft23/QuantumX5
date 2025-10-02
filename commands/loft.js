import axios from 'axios';

export async function loft(message, client) {
  const remoteJid = message.key.remoteJid;
  const body =
    message.message?.extendedTextMessage?.text ||
    message.message?.conversation ||
    '';

  // Extract the user’s query (everything after ".ask")
  const parts = body.trim().split(/\s+/);
  const query = parts.slice(1).join(' ');
  if (!query) {
    await client.sendMessage(remoteJid, {
      text: '❌ Please provide a question. Usage: `.loft What is the capital of Cameroon?`'
    });
    return;
  }

  try {
    await client.sendMessage(remoteJid, {
      text: `🫸😌🫷 Thinking…`,
      quoted: message
    });

    const apiUrl = `https://apis.davidcyriltech.my.id/ai/chatbot?query=${query}`;
    const { data } = await axios.get(apiUrl);

    if (!data.success || !data.result) {
      throw new Error('No answer received.');
    }

    // Send the AI’s reply
    await client.sendMessage(remoteJid, {
      text: `💬 Q: ${query}\n\n😃 A: ${data.result}\n\n> 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚂𝚒𝚛 𝙻𝚘𝚏𝚝`,
      quoted: message
    });

  } catch (err) {
    console.error('❌ Error in ask command:', err);
    await client.sendMessage(remoteJid, {
      text: `❌ Failed to get answer: ${err.message}`,
      quoted: message
    });
  }
}

export default loft;
