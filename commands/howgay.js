const {MessageEmbed } = require('discord.js')
const config = require ("../config.js");

module.exports = {
  name: "howgay",
  description: "howgay command",
  execute: async (message, args) => {
    const user = message.mentions.users.first() || message.author;
    let rng = Math.floor(Math.random() * 101);
    
    const howgayembed = new MessageEmbed()
    .setTitle("Gay mashine Calculator")
    .setDescription(user.username + " is " + rng + "% Gay🌈")
    .setColor("#f5f5dc")
    
    message.channel.send(howgayembed);
  }
}

