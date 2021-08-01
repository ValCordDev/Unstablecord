const {MessageEmbed } = require('discord.js');

module.exports ={
  name: 'bug',
  execute(message, args){
    const channel = message.guild.channels.cache.find(c => c.name === '🚨bug-reports🚨');
    if(!channel) return message.channel.send('bug channel does not exist!');

    let messageArgs = args.join(' ');
    const embed = new MessageEmbed();

    embed
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp(Date.now())
    .setColor(0xF5F5DC)
    .setDescription(messageArgs);

    channel.send(embed).then((msg) =>{
      message.delete();
    });

    const replyEmbed = new MessageEmbed();
    replyEmbed
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp(Date.now())
    .setColor(0xF5F5DC)
    .setDescription('Bug report has been recorded.');
    message.channel.send(replyEmbed);
  }
}