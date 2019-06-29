const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`بنت كيوت`,"http://twitch.tv/بنت كيوت")
client.user.setStatus("dnd")
});

client.login('NTg1OTQ2MDE4MDM0NjE0Mjgx.XRNWHQ.ClH3Rx7Jyo0JD4ck2yh143NrykQ'
);// لا تغير فيها شيء
