const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');
const canvacord = require("canvacord");
const path = require("path");
module.exports = {

    name: path.parse(__filename).name,
    execute: async (message, args) => {
        let msg = args.join(" ");
        if(!msg) msg = "Please provide text!"
        let image = await canvacord.Canvas.clyde(msg);
        let attachment = await new MessageAttachment(image, "clyde.png");
        await message.channel.send(attachment);
    }
}