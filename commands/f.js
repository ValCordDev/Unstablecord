const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'f',
  execute(client, message, args){
    const user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**React with 🇫 to pay respects to ${user}.**`)
    .setImage("https://media1.tenor.com/images/7fc74a965a42fec6a5cd2d63b080d858/tenor.gif?itemid=12855021")
    .setColor(config.color);
    message.channel.send(embed).then((msg) =>{
      msg.react('🇫');
      message.delete();
    });
  }
}
