const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'color',
  execute(message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(config.color)
      embed.setTitle("Here is the Color Panel for this Bot:")
      embed.addField("Hex Value:","``" + config.color + "``", true);
      embed.addField("RGB Values:", "``245, 245, 220``", true);
      embed.addField("RGB:", "``96.1, 96.1, 86.3``", true);
      embed.addField("CMYK Values:", "``0, 0, 10, 4``", true);
      embed.addField("HSL Values:", "``60°, 56%, 91%``", true);
      embed.addField("HSV Values:", "``60°, 10%, 96%``", true);
      message.channel.send(embed);
  }
}
