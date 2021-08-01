
const {MessageEmbed } = require('discord.js');

module.exports = {
  name:'rules',
  execute(message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(0xF5F5DC)
      embed.setTitle("**This is the Available Applications on this server At this moment :D**");
  
      embed.setDescription("**SMP Applications - ``ea!apply SMP``** \n\n" +
      "**Mod Applications - ``ea!apply Mod``** \n\n" +
      "**Developer Applications - ``ea!apply Developer``** \n\n" +
      "**More applications will come soon :) stay safe! :D**");
      message.channel.send(embed);
  }
}
