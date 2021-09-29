const Discord = require('discord.js');
const math = require('mathjs');
const config = require("../config.js");

module.exports = {
        name: "calculate",
        aliases: ['calc', 'calculator'],
        description: "Shows Calculated Answers Of User's Query",
        usage: "[query](mathematical)",
    execute: async (client, message, args) => {

        if (!args[0]) return message.channel.send("**Enter Something To Calculate**");

        let result;
        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"));
        } catch (e) {
            return message.channel.send("**Enter Valid Calculation!**\n\n**List of Calculations** - \n1. **sqrt equation** - `sqrt(3^2 + 4^2) = 5`\n2. **Units to Units** - `2 inch to cm = 0.58`\n3. **Complex Expressions Like** - `cos(45 deg) = 0.7071067811865476`\n4. **Basic Maths Expressions** - `+, -, ^, /, decimals` = **2.5 - 2 = 0.5**");
        }

        let embed = new Discord.MessageEmbed()
            .setColor(config.color)
            .setAuthor(`${config.botname} Calculator`, message.author.displayAvatarURL({ dynamic: true }))
            .addField("**Operation**", `\`\`\`Js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
            .addField("**Result**", `\`\`\`Js\n${result}\`\`\``)
            .setFooter(message.guild.name, message.guild.iconURL());
        message.channel.send(embed);
    }
}