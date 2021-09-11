const discord = require("discord.js")

module.exports = {
  name: "serveravatar",
  description: "Get avatar of the server",
  execute: async (message, args) => {
    
    let embed = new discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 2048 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
      embed.setColor("#f5f5dc")
    
      message.channel.send(embed)
    
  }
}