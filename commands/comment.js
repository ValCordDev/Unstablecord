const canvacord = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {

    name: 'comment',

    execute: async (client, message, args) => {
        const error = "<:7013donotdisturb:886554028123754507>";
        const comment = args.join('');
        if (!comment) return message.channel.send(`${error} Provide something to Comment!`)
        try {
            let yt = await canvacord.Canvas.youtube({ "avatar": message.author.displayAvatarURL({ format: "png" }), "username": message.author.username, "content": args.join(" ") })
            let attachment = new MessageAttachment(yt, 'comment.png')
            message.channel.send(attachment)
        } catch (err) {
            const embed2 = new MessageEmbed()
                .setTitle(`${error} Something went wrong.\n${error}Note : It won't work if the User contains Unwanted characters in his Username.`)
                .setColor(config.embedcolor)
            message.channel.send(embed2)
        }

    }
}