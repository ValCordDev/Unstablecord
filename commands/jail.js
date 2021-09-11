const Discord = require("discord.js");

module.exports = {
  name: "jail",
  execute: async (message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor("#f5f5dc")
    .setTitle("Get Jailed Nerd")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
}
