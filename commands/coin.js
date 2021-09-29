const config = require ("../config.js");


module.exports = {
    name: "coin",
    description: "Flips a coin",
    execute(client, message, args) {
        const {MessageEmbed } = require('discord.js')
        function randomint(max) {
            return Math.floor(Math.random() * Math.floor(max))
        }
        var picker = randomint(2)
        if (picker == 1) {
            const embed = new MessageEmbed()
                .setTitle("Coin flip")
                .setColor(config.color)
                .setDescription(`The Coin Flips **Heads** :coin:`)
            message.channel.send(embed)
        }
        else {
            const embed = new MessageEmbed()
                .setTitle("Coin flip")
                .setColor(config.color)
                .setDescription(`The Coin Flips **Tails** :coin:`)
            message.channel.send(embed)
        }
    }
}