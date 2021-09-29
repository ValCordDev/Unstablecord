const {MessageEmbed } = require('discord.js');
const GiveMeAJoke = require("discord-jokes")
const config = require ("../config.js");
module.exports = {
  name: "dadjoke",
  description: "dadjoke command",
  execute: async (client, message, args) => {
    GiveMeAJoke.getRandomDadJoke (function(joke) {
      const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription("``You are into dadjokes aswell? Here is one for ya`` \n\n" + `**${joke}** \n\n` + "``I dont get how people find this funny...``")
      .setColor(config.color)
      .setTimestamp(Date.now())
      message.channel.send(embed);
    })
  }
}