const { Client, MessageEmbed, Collection } = require('discord.js');
const prefix = '#';

module.exports = {
  name:'f',
  execute(message, args){
    const user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**React with 🇫 to pay respects to ${user}.**`)
    .setImage("https://media1.tenor.com/images/7fc74a965a42fec6a5cd2d63b080d858/tenor.gif?itemid=12855021")
    .setColor(0xF5F5DC);
    message.channel.send(embed).then((msg) =>{
      msg.react('🇫');
      message.delete();
    });
  }
}

//🇫