const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'pp',
  execute(message, args){
    const user = message.mentions.users.first() || message.author
  
    const ppSize = ["=", "==", "===", "====", "=====", "======", "=======", "========", "=========", "=========="]
    
    const embed = new MessageEmbed()
      .setTitle(`***PP CALCULATOR***`)
      .setDescription(`*${user}'s pp size is:* \n\n ***ANSWER:*** \n 8${ppSize[Math.floor(Math.random()*ppSize.length)]}D`)
      .setColor("#f5f5dc");

    message.channel.send(embed);
     
  }
} 