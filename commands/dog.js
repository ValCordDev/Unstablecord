const superagent = require("snekfetch");
const Discord = require('discord.js')



module.exports = {
  name: "dog",
execute: async (message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("<a:dog1:730389376210829344>")
  .setImage(response.body.url)
  .setColor(`#f5f5dc`)
  .setFooter(`🤣WHAT A DOG🤣`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};