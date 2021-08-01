const { MessageEmbed } = require('discord.js');

module.exports ={
  name: 'suggest',
  execute(message, args){
    const channel = message.guild.channels.cache.find(c => c.name === '🔗suggestions🔗');
    if(!channel) return message.channel.send('suggestions channel does not exist!');

    let messageArgs = args.join(' ');
    const embed = new MessageEmbed();

    embed
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(0xF5F5DC)
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
    .setColor(0xF5F5DC)
    .setDescription('Suggestion has been recorded.');
    message.channel.send(replyEmbed);
  }
}