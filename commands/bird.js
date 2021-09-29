const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
	name: 'bird',
	execute: async (client, message, args) => {
		const url = 'https://some-random-api.ml/img/birb';
		const facts = 'https://some-random-api.ml/facts/birb';

		let image; let
			response;
		let fact; let
			responses;
		try {
			response = await axios.get(url);
			image = response.data;

			responses = await axios.get(facts);
			fact = responses.data;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('Random Bird Image and Fact')
			.setColor(config.color)
			.setDescription(fact.fact)
			.setImage(image.link);

		return message.channel.send(embed);
	},
};