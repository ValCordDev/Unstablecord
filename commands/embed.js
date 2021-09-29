const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'embed',
  execute(client, message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(config.color)
      .setDescription(message.content.replace(config.prefix + "embed", "").trim())
     message.channel.send(embed).then((msg) =>{
      message.delete();
    });
  }
}
