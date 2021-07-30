
const { Client, MessageEmbed, Collection } = require('discord.js');
const prefix = '#';

module.exports = {
  name:'kick',
  execute(message, args){
     if(!message.member.hasPermission("KICK_MEMBERS")){return message.reply("You don't have perms")}
      let user = message.mentions.members.first();
      if(!user) {return message.reply("Please kick a valid member!")}
      user.kick(`Kicked by ${message.author.tag}`)
      message.channel.send(`Kicked ${user.user.tag}`)
  }
}