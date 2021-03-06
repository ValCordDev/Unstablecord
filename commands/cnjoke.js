const {MessageEmbed } = require('discord.js');
const GiveMeAJoke = require("discord-jokes");
const config = require ("../config.js");

module.exports = {
  name: "cnjoke",
  description: "chuck norris joke command",
  execute: async (client, message, args) => {
    GiveMeAJoke.getRandomCNJoke (function(joke) {
      const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription("``You are into CNjokes? Here is one for ya`` \n\n" + `**${joke}**`)
      .setColor(config.color)
      .setTimestamp(Date.now())
      message.channel.send(embed);
    })
  }
}