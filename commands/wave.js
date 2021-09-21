const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name: 'wave',
  execute(message, args){

    const auth = message.author
    const user = message.mentions.users.first() || message.author
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${auth} waves to you, ${user} :D**`)
    .setImage("https://c.tenor.com/90SEF-Ptnx8AAAAC/hello-hey.gif")
    .setColor(config.color);
    message.channel.send(embed).then((msg) =>{
      msg.react('👋');
      message.delete();
    });
  }
}