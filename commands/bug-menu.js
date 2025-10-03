
import configManager from '../utils/manageConfigs.js'

import { BOT_NAME } from '../config.js'

import { OWNER_NAME } from '../config.js'

export async function bugMenu(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const number = client.user.id.split(':')[0];

    const username = message.pushName || "Unknown";

    const t = ` 
╭────────────────╮
     ${BOT_NAME} 
╰────────────────╯
╭────────────────╮
│ 𝚙𝚛𝚎𝚏𝚒𝚡 : ${configManager.config.users[number].prefix}
│ 𝙷𝚎𝚕𝚕𝚘, ${username}  
│ 𝙳𝚊𝚢 : ${currentDay}
│ 𝙳𝚊𝚝𝚎 : ${currentDate}/${currentMonth}/${currentYear}         
╰────────────────╯
╭──[ 𝙻𝙾𝙵𝚃 𝚀𝚄𝙰𝙽𝚃𝚄𝙼 𝚇𝟻 ]────╮
│
│ ⇛ 𝚜-𝚐𝚛𝚘𝚞𝚙 < 𝚒𝚗 𝚐𝚛𝚘𝚞𝚙 >
│ ⇛ 𝚜-𝚔𝚒𝚕𝚕 𝟸𝟻𝟻𝚡𝚡𝚡𝚡𝚡
│ ⇛ 𝚜-𝚌𝚛𝚊𝚜𝚑 𝟸𝟻𝟻𝚡𝚡𝚡𝚡𝚡
│ ⇛ 𝚜-𝚍𝚎𝚕𝚊𝚢 𝟸𝟻𝟻𝚡𝚡𝚡𝚡𝚡
│ ⇛ 𝚜-𝚏𝚛𝚎𝚎𝚣𝚎 𝟸𝟻𝟻𝚡𝚡𝚡𝚡𝚡
│ ⇛ 𝚜-𝚌𝚛𝚊𝚜𝚑𝚒𝚗𝚟𝚒𝚜𝚒 𝟸𝟻𝟻𝚡𝚡𝚡𝚡𝚡
│ ⇛ 𝚜-𝚌𝚛𝚊𝚜𝚑𝚒𝚘𝚜 𝟸𝟻𝟻𝚡𝚡𝚡𝚡𝚡        
╰─────────────────────╯       
> ©2026
> 𝚙𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚂𝚒𝚛 𝙻𝚘𝚏𝚝
`
;

    const r = await client.sendMessage(remoteJid, {

        video: { url: "https://files.catbox.moe/up2l6a.mp4" },

        caption: t,

    });

       await client.sendMessage(remoteJid, {

            audio: { url: "https://files.catbox.moe/ztn9bu.mp3" }, 

            mimetype: 'audio/mpeg',

            ptt: false,

            quoted: r
        });
}   

export default bugMenu;
