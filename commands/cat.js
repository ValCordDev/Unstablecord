const randomPuppy = require('random-puppy');
const {MessageEmbed } = require('discord.js');

module.exports = {
  name: "cat",
  description: "cat command",
  execute: async (message, args) => {
    const subReddits = ["cat"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)

    const embed = new MessageEmbed()
    .setColor("#f5f5dc")
    .setImage(img)
    .setTitle('Your **Cat** has been given, All the way from r/' + random)
    .setURL('https://reddit.com/r/' + random)

    message.channel.send(embed)
  }
}