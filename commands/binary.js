const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const config = require ("../config.js");

module.exports = {
	name: 'binary',
	category: 'extra',
	execute: async (client, message, args) => {
		const url = `https://no-api-key.com/api/v1/binary?text=${args.join('%20')}`;

		let response;

		try {
			const { data } = await axios.get(url);
			response = data;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}

		const embed = new MessageEmbed()
			.setTitle('Text to Binary')
			.setDescription("``" + response.binary + "``")
      .setColor(config.color);

		return message.channel.send(embed);
	},
};