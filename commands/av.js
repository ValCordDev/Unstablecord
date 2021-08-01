const {MessageEmbed } = require('discord.js');

module.exports = {
  name:'av',
  execute(message, args){
    const user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setColor(0xF5F5DC)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    message.channel.send(embed);
  }
}
