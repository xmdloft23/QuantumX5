import configManager from '../utils/manageConfigs.js'

import { BOT_NAME } from '../config.js'

import { OWNER_NAME } from '../config.js'

import fs from 'fs';

import path from 'path';

import { WA_CHANNEL } from "../config.js"


export async function info(message, chatId) {

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
╭────────────────╮
     ${BOT_NAME} 
╰────────────────╯
╭────────────────╮
│ 𝚙𝚛𝚎𝚏𝚒𝚡 : ${configManager.config.users[number].prefix}
│ 𝙷𝚎𝚕𝚕𝚘, ${username}  
│ 𝙳𝚊𝚢 : ${currentDay}
│ 𝙳𝚊𝚝𝚎 : ${currentDate}/${currentMonth}/${currentYear}         
╰────────────────╯
      𝐌𝐄𝐍𝐔𝐒
│
│ ☃ 𝚖𝚎𝚗𝚞
│ ☃ 𝚙𝚛𝚎𝚖-𝚖𝚎𝚗𝚞
│ ☃ 𝚋𝚞𝚐-𝚖𝚎𝚗𝚞
╰────────────────
      𝐔𝐓𝐈𝐋𝐒
│ 
│ ☃ 𝚙𝚒𝚗𝚐
│ ☃ 𝚐𝚎𝚝𝚒𝚍
│ ☃ 𝚜𝚞𝚍𝚘
│ ☃ 𝚝𝚘𝚞𝚛𝚕
│ ☃ 𝚘𝚠𝚗𝚎𝚛    
│ ☃ 𝚏𝚊𝚗𝚌𝚢   
│ ☃ 𝚞𝚙𝚍𝚊𝚝𝚎
│ ☃ 𝚍𝚎𝚟𝚒𝚌𝚎 
│ ☃ 𝚍𝚎𝚕𝚜𝚞𝚍𝚘
│ ☃ 𝚐𝚎𝚝𝚜𝚞𝚍𝚘    
╰─────────────────
     𝐎𝐖𝐍𝐄𝐑
│
│ ☃ 𝚘𝚗𝚕𝚒𝚗𝚎
│ ☃ 𝚠𝚎𝚕𝚌𝚘𝚖𝚎
│ ☃ 𝚊𝚞𝚝𝚘𝚝𝚢𝚙𝚎
│ ☃ 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚌𝚝
│ ☃ 𝚜𝚎𝚝𝚙𝚛𝚎𝚏𝚒𝚡
│ ☃ 𝚐𝚎𝚝𝚌𝚘𝚗𝚏𝚒𝚐
│ ☃ 𝚜𝚝𝚊𝚝𝚞𝚜𝚕𝚒𝚔𝚎
│ ☃ 𝚊𝚞𝚝𝚘𝚛𝚎𝚌𝚘𝚛𝚍        
╰─────────────────
       𝐀𝐃𝐌𝐈𝐍 
│
│ ☃ 𝚋𝚢𝚎
│ ☃ 𝚔𝚒𝚌𝚔
│ ☃ 𝚙𝚞𝚛𝚐𝚎        
│ ☃ 𝚖𝚞𝚝𝚎
│ ☃ 𝚞𝚗𝚖𝚞𝚝𝚎
│ ☃ 𝚙𝚛𝚘𝚖𝚘𝚝𝚎
│ ☃ 𝚍𝚎𝚖𝚘𝚝𝚎
│ ☃ 𝚐𝚌𝚕𝚒𝚗𝚔      
│ ☃ 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
│ ☃ 𝚔𝚒𝚌𝚔𝚊𝚕𝚕
│ ☃ 𝚙𝚛𝚘𝚖𝚘𝚝𝚎𝚊𝚕𝚕
│ ☃ 𝚍𝚎𝚖𝚘𝚝𝚎𝚊𝚕𝚕
╰─────────────────
        𝐌𝐄𝐃𝐈𝐀 
│
│ ☃ 𝚟𝚟 
│ ☃ 𝚝𝚊𝚔𝚎  
│ ☃ 𝚜𝚊𝚟𝚎 
│ ☃ 𝚙𝚑𝚘𝚝𝚘
│ ☃ 𝚜𝚎𝚝𝚙𝚙
│ ☃ 𝚐𝚎𝚝𝚙𝚙
│ ☃ 𝚝𝚘𝚊𝚞𝚍𝚒𝚘
│ ☃ 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
╰─────────────────
        𝐒𝐄𝐀𝐑𝐂𝐇 
│
│
│ ☃ 𝚕𝚘𝚏𝚝 > 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗
│ ☃ 𝚆𝚒𝚔𝚒-𝚎𝚗 > 𝚝𝚘𝚙𝚒𝚌
│ ☃ 𝚆𝚒𝚔𝚒-𝚏𝚛 > 𝚝𝚘𝚙𝚒𝚌       
╰─────────────────
     𝐃𝐎𝐖𝐍𝐋𝐎𝐃𝐄𝐑 
│ 
│ ☃ 𝚒𝚖𝚐
│ ☃ 𝚙𝚕𝚊𝚢
│ ☃ 𝚝𝚒𝚔𝚝𝚘𝚔
╰─────────────────
      𝐀𝐃𝐌𝐈𝐍 (2) 
│
│ ☃ 𝚝𝚊𝚐
│ ☃ 𝚝𝚊𝚐𝚊𝚍𝚖𝚒𝚗
│ ☃ 𝚝𝚊𝚐𝚊𝚕𝚕
│ ☃ 𝚜𝚎𝚝𝚝𝚊𝚐  
│ ☃ 𝚛𝚎𝚜𝚙𝚘𝚗𝚜
╰─────────────────

> 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚂𝚒𝚛 𝙻𝚘𝚏𝚝`
;
    await sock.sendMessage(chatId, {
            video: { url: https://files.catbox.moe/vpjvbq.mp4 },
            mimetype: 'video/mp4',
            caption: helpMessage
        }, { quoted: message });

    });

    await sock.sendMessage(chatId, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: message });

    }   

export default info;