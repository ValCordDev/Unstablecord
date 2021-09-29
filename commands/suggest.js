const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports ={
  name: 'suggest',
  execute(client, message, args){
    const channel = message.guild.channels.cache.find(c => c.name === '🔗suggestions🔗');
    if(!channel) return message.channel.send('suggestions channel does not exist!');

    let messageArgs = args.join(' ');
    const embed = new MessageEmbed();

    embed
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(config.color)
      .setDescription(messageArgs);

    channel.send(embed).then((msg) =>{
      msg.react('👍');
      msg.react('👎');
      message.delete();
    });

    const replyEmbed = new MessageEmbed();
    replyEmbed
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setTimestamp(Date.now())
    .setColor(config.color)
    .setDescription('Suggestion has been recorded.');
    message.channel.send(replyEmbed);
  }
}