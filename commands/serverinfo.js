const {MessageEmbed} = require("discord.js");
const config = require ("../config.js");

module.exports = {
  name: "serverinfo",
execute: async (message, args) => {
//command
let servericon = message.guild.iconURL;
let serverembed = new MessageEmbed()
.setTitle("Server Information")
.setColor("#f5f5dc")
.setThumbnail(servericon)
.addField("Server Name", message.guild.name)
.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
.addField("Channels", message.guild.channels.cache.size, true)
.addField("Roles", message.guild.roles.cache.size, true)
.addField("Created On", message.guild.createdAt)
.addField("You Joined", message.member.joinedAt)
.addField("Total Members", message.guild.memberCount)
.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL);
message.channel.send(serverembed);
}
};