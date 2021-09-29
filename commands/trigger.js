const canvacord = require ("canvacord")
const { MessageAttachment } = require("discord.js")
const config = require ("../config.js");

module.exports= {
  name:"trigger",
  execute: async (client, message, args) => {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new MessageAttachment(image, "triggered.gif");
    return message.channel.send(attachment);
  }
}