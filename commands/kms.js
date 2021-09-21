const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'kms',
  execute(message, args){
    const user = message.author;
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${user} Committed Suicide on this tragic day. Press 🇫 to pay respect to our fallen solider**`)
    .setImage("https://media.giphy.com/media/ylpVjMDhvwNb2/giphy.gif?cid=ecf05e47mbgcuzenyp48rl3992q7yn9a30lhfbggp33o11v4&rid=giphy.gif&ct=g")
    .setColor(0xF5F5DC);
    message.channel.send(embed).then((msg) =>{
      msg.react('🇫');
      message.delete();
    });
  }
}
