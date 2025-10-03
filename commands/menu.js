import { BOT_NAME } from '../config.js'

import { OWNER_NAME } from '../config.js'



export async function menu(bot, msg) {

	const chatId = msg.chat.id;

	const userId = msg.from.id;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

	const t = ` 
╭─────────────────╮
     ༒ ${BOT_NAME} ༒
╰─────────────────╯
╭─────────────────╮
│ Hello,  ${msg.from.first_name} 
│ Day : ${currentDay}
│ Date : ${currentDate}/${currentMonth}/${currentYear}
╰─────────────────╯

╭─[ ✧ 𝙱𝙾𝚃 𝙲𝙼𝙳 ✧ ]──╮
│      
│ ⬢ /𝚜𝚝𝚊𝚛𝚝    
│ ⬢ /𝚖𝚎𝚗𝚞          
│ ⬢ /𝚌𝚘𝚗𝚗𝚎𝚌𝚝 255𝚡𝚡𝚡𝚡𝚡     
│ ⬢ /𝚍𝚒𝚜𝚌𝚘𝚗𝚗𝚎𝚌𝚝 255𝚡𝚡𝚡𝚡𝚡   
╰─────────────────╯   
╭─[ ✧ 𝙾𝚆𝙽𝙴𝚁 𝙲𝙼𝙳 ✧ ]──╮
│      
│ ⬢ /𝚊𝚍𝚍𝚙𝚛𝚎𝚖 𝚒𝚍   
│ ⬢ /𝚍𝚎𝚕𝚙𝚛𝚎𝚖 𝚒𝚍            
╰─────────────────╯       

 @POWERED BY SIR LOFT 
 `

	await bot.sendPhoto(chatId, 'https://files.catbox.moe/rhx0pa.jpg', {

      caption: t,

      parse_mode: 'Markdown'

    });


}


export default menu;
