const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['450829132343934997','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`-`,'https://www.twitch.tv/MeeRcY')
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.Play')) {
client.user.setActivity(argresult, {type:'Playing'});
    message.channel.send(` تم تغير البلاينق ألى **${argresult} \** `)
} else 
if (message.content.startsWith('.st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(` تم تغير الستريمنق ألى **${argresult} \** `)
}
});

client.login(process.env.BOT_TOKEN);
