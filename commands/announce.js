const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports ={
  name: 'announce',
  execute(message, args){
    if(!message.member.hasPermission("ADMINISTRATOR")){
      return message.reply("You don't have perms");
    }
    const channel = message.guild.channels.cache.find(c => c.name === '💯announcements');
    if(!channel) return message.channel.send('Announcements channel does not exist');

    let messageArgs = args.join(' ');
    const embed = new MessageEmbed();

    embed
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp(Date.now())
    .setColor(config.color)
    .setDescription(messageArgs);

    channel.send(embed).then((msg) =>{
      message.delete();
    })

    const replyEmbed = new MessageEmbed();
    replyEmbed
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setTimestamp(Date.now())
    .setColor(config.color)
    .setDescription('Announcement is recorded.');
    message.channel.send(replyEmbed);
  }
}