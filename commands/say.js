const { Util } = require("discord.js");
const config = require ("../config.js");

module.exports = {
	name: 'say',
	description: 'Repeats a message with TTS enabled',
	execute(client, message, args) {
		message.channel.send(Util.removeMentions(args.join(" ")), { tts: true });
	}
};