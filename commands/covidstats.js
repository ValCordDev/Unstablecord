const { Command } = require('discord.js-commando');
const axios = require('axios');
const {MessageEmbed } = require('discord.js');
module.exports = {
  name: "covidstats",
  execute: async (message, args) => {
        if(!args) return message.say('You Need To Provide A Valid ISO Country Code');
        axios.get(`https://disease.sh/v3/covid-19/countries/${args}`).then(function (res) {
            const result = res.data;
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setTitle(`Covid-19 Statistics In ${result.country}`)
            .setColor('#f5f5dc')
            .setThumbnail(result.countryInfo.flag)
            .setDescription(`Countries Latitude: ${result.countryInfo.lat}\n Countries Longitude: ${result.countryInfo.long}\n Total Cases: ${result.cases.toLocaleString()}\n Todays Cases; ${result.todayCases.toLocaleString()}\n Total Deaths: ${result.deaths.toLocaleString()}\n Todays Deaths: ${result.todayDeaths.toLocaleString()}\n Total Recovered: ${result.recovered.toLocaleString()}\n Todays Recovered: ${result.todayRecovered.toLocaleString()}\n Active Cases: ${result.active.toLocaleString()}\n Critical Cases: ${result.critical.toLocaleString()}\n Total Tests: ${result.tests.toLocaleString()}\n Population ${result.country}: ${result.population.toLocaleString()}\n Continent: ${result.continent}`)
            .setURL(`https://disease.sh/v3/covid-19/countries/${args}`);
            message.embed(embed);
        }).catch(err => {
            message.say(`${err.response.status} ${err.response.statusText}`);
        })
    }
}