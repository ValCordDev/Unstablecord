const { Client, MessageEmbed, Collection } = require('discord.js');
const prefix = '#';


module.exports ={
  name: 'bupdate',
  execute(message, args, cmd, client, discord){
    if(!message.member.hasPermission("ADMINISTRATOR")){
      return message.reply("You don't have perms");
    }
    const channel = message.guild.channels.cache.find(c => c.name === '🧲bot-updates');
    if(!channel) return message.channel.send('Bot updates channel does not exist');

    let messageArgs = args.join(' ');
    const embed = new MessageEmbed();
    const msgTime = Date.now();

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
    .setDescription('Bot Update has been recorded.');
    message.channel.send(replyEmbed);
  }
}