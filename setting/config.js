const fs = require('fs')

global.owner = "234" //owner number
global.footer = "𓂀 ? ??? ???????? 𓄂𓆩" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['62']
global.xprefix = '.'
global.gambar = "https://files.catbox.moe/6thg5o.jpg"
global.OWNER_NAME = "𓄂𓆩 𝙇𝙊𝙍𝘿 𝙈𝙍.𝙆𝘼𝙉𝙀𝙆𝙄 𓆪 | 𝘿𝙀𝙑" //
global.DEVELOPER = ["2349167665601"] //
global.BOT_NAME = "KENS MD"
global.bankowner = "KANEKI 𓄂𓆩 "
global.creatorName = "LORD KANEKI "
global.ownernumber = '2349167665601'  //creator number
global.location = "Nigeria, Lagos-state, ifako"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "KEN INC 𓄂𓆩 " //footer section
global.link = "https://whatsapp.com/channel/0029Vb25bt0D38CLTOIxrZ1L"
global.autobio = true//auto update bio
global.botName = "KENS MD"
global.version = "1.0.1"
global.botname = "KENS MD"
global.author = "𓄂𓆩 𝙇𝙊𝙍𝘿 𝙈𝙍.𝙆𝘼𝙉𝙀𝙆𝙄 𓆪 | 𝘿𝙀𝙑 ⍣⃝"
global.themeemoji = ''
global.wagc = 'https://files.catbox.moe/6thg5o.jpg'
global.thumbnail = 'https://files.catbox.moe/xzvd35.jpg'
global.richpp = ' '
global.packname = "Sticker By LORD KANEKI "
global.author = "\n\n\n\n\nCreate by 𓄂𓆩 𝙇𝙊𝙍𝘿 𝙈𝙍.𝙆𝘼𝙉𝙀𝙆𝙄 𓆪 | 𝘿𝙀𝙑 \ntelegram : @returnofkaneki"
global.creator = "2349167665601@s.whatsapp.net"
global.ownername = '𓄂𓆩 𝙇𝙊𝙍𝘿 𝙈𝙍.𝙆𝘼𝙉𝙀𝙆𝙄 𓆪 | 𝘿𝙀𝙑 ' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 ICON 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𓄂𓆩 𝙇𝙊𝙍𝘿 𝙈𝙍.𝙆𝘼𝙉𝙀𝙆𝙄 𓆪 | 𝘿𝙀𝙑`
  global.mess = {
wait: "```WAIT FOR 𓄂𓆩 𝙇𝙊𝙍𝘿 𝙈𝙍.𝙆𝘼𝙉𝙀𝙆𝙄 𓆪 | 𝘿𝙀𝙑```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔 KENS MD",
   on: "KENS MD active bro", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "KENS off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by Richie",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for Richie beloved Premium users",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoviewstatus = false
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
