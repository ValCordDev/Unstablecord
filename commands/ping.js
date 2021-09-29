const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'ping',
  description: "This command will show The Bot latency",
  execute(client, message, args){
    const msgTime = Date.now();
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(config.color)
      .setTitle("Pong!")
      .setDescription("Bot latency " + (Date.now() - msgTime) + " ms.");
      message.channel.send(embed);
  }
}

