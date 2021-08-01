const { MessageEmbed } = require('discord.js');

module.exports = {
  name:'ping',
  description: "This command will show The Bot latency",
  execute(message, args){
    const msgTime = Date.now();
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(0xF5F5DC)
      .setDescription("Bot latency " + (Date.now() - msgTime) + " ms.");
      message.channel.send(embed);
  }
}

