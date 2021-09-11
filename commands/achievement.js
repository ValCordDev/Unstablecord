const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  execute: async (message, args) => {
    if(!args[0]) {
      return message.reply("Please use #achievement <input>")
    }
    let ach = args.join('+');
    if(ach.length > 20) {
      return message.reply('Maxmium character limit is 20!')
    }
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${ach}`
      )
      .setColor("#f5f5dc")
    message.channel.send(e);
  },
};