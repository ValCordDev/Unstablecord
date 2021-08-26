const randomPuppy = require('random-puppy');
const {MessageEmbed } = require('discord.js');

module.exports = {
  name: "dog",
  description: "dog command",
  execute: async (message, args) => {
    const subReddits = ["dog"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)

    const embed = new MessageEmbed()
    .setColor("#f5f5dc")
    .setImage(img)
    .setTitle('Your **Dog** has been given, All the way from r/' + random)
    .setURL('https://reddit.com/r/' + random)

    message.channel.send(embed)
  }
}