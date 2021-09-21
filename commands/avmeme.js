const randomPuppy = require('random-puppy');
const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name: "avmeme",
  description: "Meme command",
  execute: async (message, args) => {
    const subReddits = ["aviationmemes", "aviation"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)

    const embed = new MessageEmbed()
    .setColor(config.color)
    .setImage(img)
    .setTitle('Your **Aviationmeme** has been granted, All the way from r/' + random)
    .setURL('https://reddit.com/r/' + random)

    message.channel.send(embed)
  }
}