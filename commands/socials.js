const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'socials',
  execute(client, message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(config.color)
      .setTitle("Social Links")
      .setDescription("**Linktree Link:** \n\n" + "https://linktr.ee/valcord_ \n\n\n" +
      "**YouTube Link:** \n\n" + "https://youtube.com/valcord \n\n\n" +
      "**Twitch Link:** \n\n" + "https://www.twitch.tv/valcord_hehe \n\n\n" +
      "**Instagram Link:** \n\n" + "https://instagram.com/valcordyt");
      message.channel.send(embed);
  }
}
