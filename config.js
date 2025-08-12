const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_48_08_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTg1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzN1BrNG5HNEpQR3lrWFRTelM5alk2dFllbUc2YURmNG1FWU9IbDljR1NFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzU1MzIwNzUyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4ODIyNTQ2NDUxNzk2NTY0MTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU0OTU5Njk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTUzMjA3NTIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTk4NTlFNUFDQUMwRjAxNTk5OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTQ5NTk3MDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicW9BUFgyVzdRRWVELVE2VHFIcGxvZ1wiLFxuICBcInBob25lSWRcIjogXCI3MzQzM2Q5ZC02ZWY3LTQ0ODQtYmU3Yi04NWVhZmEyZmIzZTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTM5LFxuICAgICAgMTA0LFxuICAgICAgMzgsXG4gICAgICAxMDMsXG4gICAgICAyMjgsXG4gICAgICAxNDksXG4gICAgICAyMTYsXG4gICAgICAxMTMsXG4gICAgICAyNTAsXG4gICAgICAxMixcbiAgICAgIDEyMCxcbiAgICAgIDg0LFxuICAgICAgMTAwLFxuICAgICAgMTA0LFxuICAgICAgMTY2LFxuICAgICAgMjM2LFxuICAgICAgMTI4LFxuICAgICAgMTIzLFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDI0MCxcbiAgICAgIDIyNSxcbiAgICAgIDE2NSxcbiAgICAgIDE3MyxcbiAgICAgIDgxLFxuICAgICAgMTMzLFxuICAgICAgMjUzLFxuICAgICAgNyxcbiAgICAgIDExMSxcbiAgICAgIDI3LFxuICAgICAgMjI5LFxuICAgICAgMjQ0LFxuICAgICAgMTUsXG4gICAgICAxMDcsXG4gICAgICA0MCxcbiAgICAgIDE2MyxcbiAgICAgIDYzLFxuICAgICAgNDksXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLNzUxYTBLRU11ZTZzUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlU3ZGpsUSs4UFA5VG1rb2FIS0R6VGpuK3Y5bUVsVmU1cE9XaXRjV3RvU0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY1FSQXhGRDJPUVFDZ1BvUXY4QUcxVE4wVGdyRzk0bkpMSkdwVUpjL3RiMm5WeE1IZjl0Z0o2SGszNHN6c25tZnNxUkJHT1NzaVdtS243OGkrT0d0Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNng3RnFYdVo3ckV3NWpOa09LY2ZvWXpTOEx4RGh4STZPY3hqaGdhQysyTXdLVVZETGpxT3hUQlBPVEFRbi8zWjJCdVlhQ0hEZHhsdXVPUTJwcHVxakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTMyMDc1MjE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk4MjgyMTg5NjE5MzAyOjExQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJVUk5FUvCfkpXwn5mI8J+ltlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTUzMjA3NTIxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTQ5NTk2OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMbVBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxtUC5qc29uIjogIntcImtleURhdGFcIjpcIjNGNTBTWm9Ya1N0aWYvSXJ5Y083RDJsSVFkM1psWnVvU0JHRGc4aC9MQzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc4MDEzNDU3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzU0OTQwMzczNTkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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

