const Discord = require(`discord.js`);
const config = require ("../config.js");

module.exports = {
    name: 'whoisbish',
    description: 'Who is the biggest bish',

    execute(client, message, args) {
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`:rotating_light: ${message.guild.members.cache.random(1)} is a bish!`)
            .setColor(config.color));
    }
};