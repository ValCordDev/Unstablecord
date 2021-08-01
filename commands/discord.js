const { MessageEmbed } = require('discord.js');

module.exports = {
  name:'discord',
  execute(message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(0xF5F5DC)
      .setTitle("Social Links")
      .addField("Discord.gg Link:", "``discord.gg/vWMeA5KaeU``")
      .addField("Dsc.gg Link:", "``dsc.gg/valcord``")
      .addField("Discord.io Link:", "``discord.io/valcord``")
      .addField("Bit.ly Link:", "``bit.ly/valcord_``")
      message.channel.send(embed);
  }
}
