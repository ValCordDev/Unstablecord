const config = require ("../config.js");
const {MessageEmbed } = require('discord.js');
const Database = require("@replit/database");
const db = new Database()


module.exports = {
  name:'balance',
  execute: async(client, message, args) => {
  let balance = await db.get(`wallet_${message.author.id}`)
  let bank = await db.get(`bank_${message.author.id}`)
  
  if(balance === null) balance = 0
  if(bank === null) bank = 0
  let currency = "€"
	const embed = new MessageEmbed()
	.setTitle(`${message.author.username}'s Balance:`)
  .setDescription(`Wallet: ${balance}${currency}\nBank: ${bank}${currency}`)
  .setColor(config.color)
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(embed)

  }
}
