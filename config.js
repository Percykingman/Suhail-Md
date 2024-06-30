const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0715458436";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_11_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzS01WamRmUE9rb0I3Vk9pbGd0VE0zM2dma0dpQ1NHRWRjNTlZVXdrV2JBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNTQ1ODQzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzdFNTE5RDg5RkUyRjlEMUZENERBQThEMkE3MTgwNUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzUzMDgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhzUVUxbzdIU2RhUnNiTGY3T21CZGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjMxMTc4ZWYtZjdmZi00ZDFlLTk1MDEtM2QxOWEwOGQyOTE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDIyMSxcbiAgICAgIDEyNyxcbiAgICAgIDUxLFxuICAgICAgMTQ3LFxuICAgICAgNTksXG4gICAgICAxMzUsXG4gICAgICA5NixcbiAgICAgIDk1LFxuICAgICAgMTkzLFxuICAgICAgNTcsXG4gICAgICAyMzUsXG4gICAgICAyNDcsXG4gICAgICAxNTMsXG4gICAgICAxNzEsXG4gICAgICAxMzQsXG4gICAgICAxNjksXG4gICAgICAxLFxuICAgICAgNDQsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjA5LFxuICAgICAgOTUsXG4gICAgICAxMTUsXG4gICAgICA1OSxcbiAgICAgIDE1NixcbiAgICAgIDMwLFxuICAgICAgMjM3LFxuICAgICAgNjUsXG4gICAgICAxMjQsXG4gICAgICA3NSxcbiAgICAgIDIxMixcbiAgICAgIDExNixcbiAgICAgIDE4MSxcbiAgICAgIDI0NCxcbiAgICAgIDcyLFxuICAgICAgMjMsXG4gICAgICAxNjgsXG4gICAgICA5NixcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktaQjVQQ0EyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTU0NTg0MzY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlVua25vd25cIixcbiAgICBcImxpZFwiOiBcIjIxNzYyODY3NzUzMTYzOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG1MaGVZQkVQR3loYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMRG5qd0dKZnhYeThQWDFkSzhTK2pkcXhUU1Rhd2Ntd1U5SVdPeEtDS0h3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNYVTVWRVM2WFFnZnRpUnV6TVdXQWFONUp0V205cGcycGdpTjZpWDh2bTY5K1M1RXNIZjZBSEExYldtd1ZCbG5IczZDbEpiUlY0OEJWbFBLOUplV0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFVVm8wdGhnNy9TaEl4RVdrL0ZpUHZSUGZacWM1bXVYc2RaMGtnOC9MeGg0SHdSMzYxV3RRUEJ1ZTRSeGNvd2c2dEJaN3FDdllrTGE4eEVoejRwWGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNTQ1ODQzNjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc1MzA3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5iMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmIwLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
