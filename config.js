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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22VQ69NP";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_30_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDYzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOW1yVzhNaHlwYStjY0dqVGdVUThtby9HNGpFQUFSa3BiNXAzL0pUV1JuND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMDVSaEg3SHRTdFdQRGZ6aS1GSjNzZ1wiLFxuICBcInBob25lSWRcIjogXCIxMzQwYjViZi1jM2E2LTQ5YWMtOTk0OS01MmIyN2VhOWMwNzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMjEwLFxuICAgICAgMjE5LFxuICAgICAgNzUsXG4gICAgICAzNixcbiAgICAgIDI4LFxuICAgICAgMTM1LFxuICAgICAgMzIsXG4gICAgICAxMjMsXG4gICAgICAxNzMsXG4gICAgICAyNDIsXG4gICAgICA3MixcbiAgICAgIDI1MyxcbiAgICAgIDgzLFxuICAgICAgMTQ0LFxuICAgICAgMjE2LFxuICAgICAgMTA0LFxuICAgICAgMjE4LFxuICAgICAgMTI2LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjIsXG4gICAgICAxNjQsXG4gICAgICA2MixcbiAgICAgIDE0NSxcbiAgICAgIDE1NCxcbiAgICAgIDE2NSxcbiAgICAgIDE2NixcbiAgICAgIDg2LFxuICAgICAgMTU2LFxuICAgICAgMTQyLFxuICAgICAgNjQsXG4gICAgICA4MixcbiAgICAgIDM2LFxuICAgICAgMTQ3LFxuICAgICAgMjEsXG4gICAgICAxMTUsXG4gICAgICAyNDYsXG4gICAgICA4MCxcbiAgICAgIDExNixcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyMlZRNjlOUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE1NDU4NDM2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJVbmtub3duXCIsXG4gICAgXCJsaWRcIjogXCIyMTc2Mjg2Nzc1MzE2MzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpTGhlWUJFSkRDN2JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTERuandHSmZ4WHk4UFgxZEs4UytqZHF4VFNUYXdjbXdVOUlXT3hLQ0tIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJldlI5VW5XSzd1ZVZIRGd4LzlOVENhZ3MzOThRR2RnUUxkbGhkTVU5Q2ZIYStjN1RuV21YbTcrQ0Foc3Y0OXg2dURVMVRRUFordmFHaFU0TjVoRmpBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1WGdkZjVlTTFFaGZ1MHB4bG8xTVk0MzNINU5NYlBoQWwxa1lJSnk2UEpZU3JGZXNteDVSekxmbCswRnRmc1BlV2dSUjNUNTlFYVJKTmVieDZLODJpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTU0NTg0MzY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzNjE4MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOYnpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5iei5qc29uIjogIntcImtleURhdGFcIjpcIklHRG9KOFZDZmRUNHhzb2djc3Iwb1plZVVUMVFkSEM4TS8waDdXOUVMNXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDgyNDI4NDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNjE4MTYzMzNcIn0iCn0="  // PUT your SESSION_ID 


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
