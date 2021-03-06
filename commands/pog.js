const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'pog',
  execute(client, message, args){
    const user = message.author;
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**Pog Fish has Arrived!**`)
    .setImage("https://c.tenor.com/j8SaWIj5Mr4AAAAd/fish-pog-fish.gif")
    .setColor(config.color);
    message.channel.send(embed).then((msg) =>{
      msg.react('🇵');
      msg.react('🇴');
      msg.react('🇬');
      message.delete();
    });
  }
}
