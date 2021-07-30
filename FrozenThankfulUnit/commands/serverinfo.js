const { Client, MessageEmbed, Collection } = require('discord.js');

module.exports = {
  name:'serverinfo',
  execute(message, args){
    const user = message.mentions.users.first() || message.author;

    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setColor(0xF5F5DC)
      .setTitle(`**__Server Information__**`)
      .setAuthor(`${message.guild.name}`, message.guild.iconURL)
      .addField("**Role Amount:**", `${message.guild.roles.cache.size}`, true)
      .addField("**Server Owner:**", `${message.guild.owner}`, true)
      .addField("**Member Count:**", `${message.guild.memberCount}`, true)
      .setDescription(`Server Creation Date: ${message.guild.createdAt}`)
      .addField("**Channel Amount:**", `${message.guild.channels.cache.size}`, true)
      .addField("**Guild ID:**", `${message.guild.id}`, true);
    message.channel.send(embed);
  }
}
