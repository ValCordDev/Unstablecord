const { MessageEmbed } = require('discord.js');

module.exports = {
  name:'embed',
  execute(message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(0xF5F5DC)
      .setDescription(message.content.replace(prefix + "embed", "").trim());
      message.channel.send(embed).then((msg) =>{
      message.delete();
    });
  }
}

