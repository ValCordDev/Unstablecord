const discord = require("discord.js")
const config = require ("../config.js");

module.exports = {
  name: "serveravatar",
  description: "Get avatar of the server",
  execute: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 2048 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
      embed.setColor("config.color")
    
      message.channel.send(embed)
    
  }
}