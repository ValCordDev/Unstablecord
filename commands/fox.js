const randomPuppy = require('random-puppy');
const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name: "fox",
  description: "fox command",
  execute: async (client, message, args) => {
    const subReddits = ["foxes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)

    const embed = new MessageEmbed()
    .setColor(config.color)
    .setImage(img)
    .setTitle('Your **fox** has been given, All the way from r/' + random)
    .setURL('https://reddit.com/r/' + random)

    message.channel.send(embed)
  }
}