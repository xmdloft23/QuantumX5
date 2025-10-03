import fs from 'fs';

import path from 'path';

import { WA_CHANNEL } from "../config.js"

async function channelSender(message, client, texts, num) {
    
    const remoteJid = message.key.remoteJid;

    const imagePath = path.resolve(`https://files.catbox.moe/rhx0pa.jpg`);

    let thumbBuffer;
    try {
        thumbBuffer = fs.readFileSync(imagePath); // ✅ Read thumbnail as buffer
    } catch (err) {
        console.error("❌ Thumbnail not found:", err.message);
        thumbBuffer = null; // fallback to avoid crash
    }

    await client.sendMessage(remoteJid, {

        image: { url: imagePath }, // ✅ works if it's a valid local file path

        caption: `> ${texts}`,

        contextInfo: {

            externalAdReply: {

                title: "Join Our WhatsApp Channel",

                body: "𝙻𝙾𝙵𝚃 𝚀𝚄𝙰𝙽𝚃𝚄𝙼 𝚇𝟻",

                mediaType: 1,

                thumbnail: thumbBuffer, // ✅ This MUST be a buffer

                renderLargerThumbnail: false,

                mediaUrl: `https://files.catbox.moe/rhx0pa.jpg`,

                sourceUrl: `https://files.catbox.moe/rhx0pa.jpg`,
                
                thumbnailUrl: `${WA_CHANNEL}`,

            }
        }
    });
}

export default channelSender;
