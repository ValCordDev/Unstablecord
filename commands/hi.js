const {MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name: 'hi',
  execute(client, message, args){

    const auth = message.author
    const user = message.mentions.users.first() || message.author
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${auth} Says hi to you, ${user} :D**`)
    .setImage("https://c.tenor.com/pvFJwncehzIAAAAC/hello-there-private-from-penguins-of-madagascar.gif")
    .setColor(config.color);
    message.channel.send(embed).then((msg) =>{
      msg.react('👋');
      message.delete();
    });
  }
}