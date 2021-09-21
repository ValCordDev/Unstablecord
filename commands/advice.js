const Discord = require("discord.js");
const snekfetch = require("snekfetch")
const config = require ("../config.js");

module.exports ={
  name: 'advice',
  execute: async (message, args) => {
      try {
              const { body } = await snekfetch.get('http://api.adviceslip.com/advice');
              message.channel.send("``" + JSON.parse(body.toString()).slip.advice + "``");
            } catch (err) {
              message.channel.send(`An error occurred: \`${err.message}\`. Try again later!`);
            }
          }
}