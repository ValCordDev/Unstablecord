const canvacord = require ("canvacord")
const { MessageAttachment } = require("discord.js")

module.exports= {
  name:"trigger",
  execute: async (message, args) => {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new MessageAttachment(image, "triggered.gif");
    return message.channel.send(attachment);
  }
}