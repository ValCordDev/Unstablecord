const Discord = require("discord.js");
const config = require ("../config.js");

module.exports = {
  name: "jail",
  execute: async (message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle("Get Jailed Nerd")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
}
