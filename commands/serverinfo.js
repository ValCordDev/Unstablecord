const { MessageEmbed } = require('discord.js');

module.exports = {
  name:'serverinfo',
  execute(message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setColor(0xF5F5DC)
      .setTitle(`**__Server Information__**`)
      .setImage("https://cdn.discordapp.com/attachments/853591380973322240/855560733379002448/PicsArt_06-19-05.23.36.jpg")
      .setAuthor(`${message.guild.name}`, message.guild.iconURL)
      .addField("**Role Amount:**", `${message.guild.roles.cache.size}`, false)
      .addField("**Server Owner:**", `${message.guild.owner}`, false)
      .addField("**Member Count:**", `${message.guild.memberCount}`, false)
      .setDescription(`Server Creation Date: ${message.guild.createdAt}`)
      .addField("**Channel Amount:**", `${message.guild.channels.cache.size}`, false)
      .addField("**Guild ID:**", `${message.guild.id}`, false);
    message.channel.send(embed);
  }
}
