const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name: "slowmode",
  description: "slowmode command",
  execute: async (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")){return message.reply("You don't have perms")}
    let time = args[0]
    if(!time) return message.channel.send("Please provide a time in seconds!")
    if(isNaN(time)) return message.channel.send("Please provide a valid number")

    message.channel.setRateLimitPerUser(time, 'No Reason')

    message.channel.send(`Successfully set the slowmode on this channel ${time} seconds`)
  }
}