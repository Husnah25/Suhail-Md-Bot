const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_14_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk3LFxuICAgICAgICA4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9xcFpJSHM1QTZBNnQwWVBNd3ZDeHd3cWhNTTVtbzVXaXNCVU5zSmRwRTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNaQk9wUjFVVDlxRUtjVERpZG1ER3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODBiODkwOGEtYTc0ZS00NzIyLWE4MjEtNWVkODc1N2JiNjQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMjE2LFxuICAgICAgMTk1LFxuICAgICAgMTQyLFxuICAgICAgMTEwLFxuICAgICAgMTY5LFxuICAgICAgMjQ0LFxuICAgICAgMTE3LFxuICAgICAgMzUsXG4gICAgICAxNyxcbiAgICAgIDE0NCxcbiAgICAgIDE1OCxcbiAgICAgIDE4OSxcbiAgICAgIDExMixcbiAgICAgIDI0MixcbiAgICAgIDI1MCxcbiAgICAgIDI2LFxuICAgICAgMjQ0LFxuICAgICAgMTEwLFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAwLFxuICAgICAgMTAsXG4gICAgICA0OCxcbiAgICAgIDIzLFxuICAgICAgNSxcbiAgICAgIDE2MSxcbiAgICAgIDY5LFxuICAgICAgOTUsXG4gICAgICAxMzUsXG4gICAgICAxNTYsXG4gICAgICAxNjEsXG4gICAgICAxMDcsXG4gICAgICAxMjMsXG4gICAgICAyMjgsXG4gICAgICA1MyxcbiAgICAgIDE3MSxcbiAgICAgIDE1NyxcbiAgICAgIDc3LFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1FNSjJEV0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjc2MTk5MzY6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhVU05BSCBDT0xMRUNUSU9OIEFORCBHUkFQSElDUyBERVNJR05cIixcbiAgICBcImxpZFwiOiBcIjIxODkxNjY2NDI4MTA2OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0h5dThZRUVPNnRrTGdHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLQWlQOUpIb1VydnowaEpQM2kwTHJENXdvVERBZEYxRUszMjdhSm5QLzFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNnSjg3cnFrV2hFZ2hicWxBZ1UwdkRJREZjdFU3OTNTY2FjemxXL3B5K3V4dnRLalJPSWJyLzY3S1A3bmYwRzFyREVFSmFHY3dXenhDRStXTVk2SENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9VbVo4OUF6bXVFSmY5WkdQQWN0VjduZVRVZGI4TEt2Q3BHSlIrKzlDM0Q5YmN1NjJScnhhN2RzVFVhVFdvWVlrZFFoUVhBWXBReEs2S0ZsU0FYVGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjc2MTk5MzY6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgzMjEyNjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLcENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtwQy5qc29uIjogIntcImtleURhdGFcIjpcInRhVGNLejZpcGlucDhDdXlJWmhzN2JnTmk1NDh5V3pLVXNvMERLL0owdVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyMTUyMzc0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
