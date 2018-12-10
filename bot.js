const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['495533707512250389','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`--`,'https://www.twitch.tv/MeeRcY')
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.St')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(`${argresult} \` `)
}
});

client.login(process.env.HERO);
