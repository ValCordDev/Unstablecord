const superagent = require("snekfetch");
const Discord = require('discord.js')
const config = require ("../config.js");

module.exports = {
  name: "cat",
description: "Sends a random image of a cat",
execute: async (message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Random cat")
  .setImage(response.body.url)
  .setColor(config.color)
  .setFooter(`owo`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};