
const { Client, MessageEmbed, Collection } = require('discord.js');

module.exports = {
  name:'whois',
  execute(message, args){
    const user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setColor(0xF5F5DC)
    .addField('Discord Name', `${user.username}`, true)
    .addField('Tag', `${user.discriminator}`, true)
    .addField('Joined Server Date', `${user.joinedAt}`, true)
    .addField('Account Creation Date', `${user.createdAt}`, true)
    .addField('Is bot?', `${user.bot}`, true)
    .addField('ID', `${user.id}`, true)
    .addField('FW', `${user.lastMessage}`, true)
    .setThumbnail(user.displayAvatarURL({dynamic: true}))
  message.channel.send(embed);
  }
}
