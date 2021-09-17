const { Util } = require("discord.js");
// Any 'require'

module.exports = {
	name: 'say',
	description: 'Repeats a message with TTS enabled',
	execute(message, args) {
		message.channel.send(Util.removeMentions(args.join(" ")), { tts: true });
	}
};