const config = require ("../config.js");
const {MessageEmbed } = require('discord.js');
const Database = require("@replit/database");
const db = new Database()


module.exports = {
  name:'daily',
  execute: async(client, message, args) => {
  const check = await db.get(`dailyCheck_${message.author.id}`)
  const timeout = 86400000;
  let balance = await db.get(`wallet_${message.author.id}`)
  let bank = await db.get(`bank_${message.author.id}`)
  let currency = "€"
  
  if(check !== null && timeout - (Date.now() - check) > 0) {
    const ms = require("pretty-ms")
    const timeLeft = ms(timeout - (Date.now() - check))
    const e2bed = new MessageEmbed()
    .setDescription(`You have already claimed your daily prize, come back after ${timeLeft}`)
    .setColor(config.color)
    message.channel.send(e2bed)
  } else {
    let reward = 500;
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    const embed = new MessageEmbed()
    .setTitle("GG!")
    .setDescription(`You claimed ${reward.toLocaleString()}${currency} as your daily reward! Come back tomorrow!`)
    .setColor(config.color)
    message.channel.send(embed)
    await db.set(`wallet_${message.author.id}`, currentBalance + reward)
    await db.set(`dailyCheck_${message.author.id}`, Date.now())
  }
  
  }
}
