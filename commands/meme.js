const randomPuppy = require('random-puppy');
const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name: "meme",
  description: "Meme command",
  execute: async (client, message, args) => {
    const subReddits = ["dankmeme", "meme", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)

    const embed = new MessageEmbed()
    .setColor(config.color)
    .setImage(img)
    .setTitle('Your **meme** has been granted, All the way from r/' + random)
    .setURL('https://reddit.com/r/' + random)

    message.channel.send(embed)
  }
}