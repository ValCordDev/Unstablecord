const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate')
const config = require ("../config.js");

module.exports = {
  name: "translate",
  description: "translate command",
  execute: async (message, args) => {
    const txt = args.join(" ")
    translate(txt, { to: 'en'}).then(res => {
      const embed = new MessageEmbed()
      .setDescription('``' + res.text + '``')
      .setColor('#f5f5dc')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setFooter("Google Translate's got you covered")
      message.channel.send(embed);
    }).catch(err => {
      console.error(err);
    });
  }
}