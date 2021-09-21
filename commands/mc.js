const Discord = require('discord.js');
const mcapi = require('mcapi');
const config = require ("../config.js");

module.exports = {
    name: "mc",
    execute: async (message, args) => {
        let embed1 = new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription(`**Required Arguments** \n \`\`\`-mcuser <username> \`\`\``)
        .setColor('f5f5dc')

        if(!args[0]) return message.channel.send(embed1)

        try{
            let uuid = await mcapi.usernameToUUID(`${args.join(" ")}`)
            let embed = new Discord.MessageEmbed()
            .setTitle(`User: ${args.join(" ")}`)
            .addField("Name:", `${args.join(" ")}`)
            .addField("UUID:", uuid)
            .addField("Download:", `[Download](https://minotar.net/download/${args.join(" ")})`)
            .addField("NameMC:", `[Click Here](https://mine.ly/${args.join(" ")}.1)`)
            .setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${args.join(" ")}/700`)
            .setColor('f5f5dc')
            .setThumbnail(`https://minotar.net/cube/${args.join(" ")}/100.png)`)
            message.channel.send(embed);
        } catch(e) {
            let embed2 = new Discord.MessageEmbed()
            .setDescription('The specified user was not found!')
            .setColor("#f5f5dc")
            message.channel.send(embed2)
        }
    },
}