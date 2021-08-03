const { MessageEmbed } = require('discord.js');

module.exports = {
  name:'whois',
  execute: async (message, args) => {
    const user = message.mentions.users.first() || message.author;

    const member = await message.guild.members.fetch({ user, force: true })

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setColor(0xF5F5DC)
    .addField('Discord Name', `${user.username}`, false)
    .addField('Tag', `${user.discriminator}`, false)
    .addField('Joined Server Date', `${member.joinedAt}`, false)
    .addField('Account Creation Date', `${user.createdAt}`, false)
    .addField('Is bot?', `${user.bot}`, true)
    .addField('ID', `${user.id}`, false)
    .setThumbnail(user.displayAvatarURL({dynamic: true}))
  message.channel.send(embed);
  }
}
