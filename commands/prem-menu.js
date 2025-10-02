import { BOT_NAME } from '../config.js'

import { OWNER_NAME } from '../config.js'

import configManager from '../utils/manageConfigs.js'

export async function prem(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const owner = "𝐋𝐨𝐟𝐭";

    const number = client.user.id.split(':')[0];

    const username = message.pushName || "Unknown";

    const t = ` 
╭─────────────────╮
    ༒ ${BOT_NAME} ༒
╰─────────────────╯
╭─────────────────╮
│ Prefix : ${configManager.config.users[number].prefix}
│ Hello, ${username}  
│ Day : ${currentDay}
│ Date : ${currentDate}/${currentMonth}/${currentYear} 
│ Version : 5.2.0
│ Plugins : 63
│ Type : X-MD        
╰─────────────────╯

╭─[ ✧ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙲𝙼𝙳 ✧ ]──╮
│      
│ ⬢ 𝚌𝚘𝚗𝚗𝚎𝚌𝚝 𝟸𝟹𝟽𝚡𝚡𝚡𝚡𝚡
│ ⬢ 𝚍𝚒𝚜𝚌𝚘𝚗𝚗𝚎𝚌𝚝 𝟸𝟹𝟽𝚡𝚡𝚡𝚡𝚡 
│ ⬢ 𝚛𝚎𝚌𝚘𝚗𝚗𝚎𝚌𝚝       
╰─────────────────╯          

> Powered by Sir Loft ❤️ 
    `
;

    await client.sendMessage(remoteJid, {

        image: { url: "https://files.catbox.moe/rhx0pa.jpg" },

        caption: t,

        quoted: message 


    });
}   

export default prem;
