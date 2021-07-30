const mySecret = process.env['DISCORD_TOKEN']
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
// ================= START BOT CODE ===================
const { Client, MessageEmbed, Collection } = require('discord.js');
const client = new Client();
const prefix = '#';
const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('guildMemberAdd', member => {
	let welcomeRole = member.guild.roles.cache.find(
		role => role.name === 'Member'
	);
	member.roles.add(welcomeRole);
	const embed = new MessageEmbed()
		.setAuthor(
			member.displayName,
			member.user.displayAvatarURL({ dynamic: true })
		)
		.setTimestamp(Date.now())
		.setTitle(`Welcome to ValCord's Crib, ${member}`)
		.setDescription(
			'What should you do first? \n' +
				'> - Make sure to read the rules! <#814934780335357952> \n' +
				'> - Get some reaction/selfroles here! <#815292982458056774> \n' +
				'> - Get some game roles aswell! <#814938755974561803> \n' +
				'> - Go around and playbaround with the bots! <#814935733126561853> \n' +
				'> - Make some new friends and meet new people! <#814935473478041670> \n' +
				'And the most important part: Have fun! :D'
		)
		.setThumbnail(
			'https://images-ext-1.discordapp.net/external/stjQMBDAFp4D3Mje1lQ4bwT6HxcRC3d2L1_SyxVY7Ac/%3Fitemid%3D5859657/https/media1.tenor.com/images/748b74e67742c6a75f63b18145939a19/tenor.gif?width=100&height=75'
		)
		.setImage(
			'https://images-ext-1.discordapp.net/external/stjQMBDAFp4D3Mje1lQ4bwT6HxcRC3d2L1_SyxVY7Ac/%3Fitemid%3D5859657/https/media1.tenor.com/images/748b74e67742c6a75f63b18145939a19/tenor.gif?width=1000&height=750'
		)
		.setFooter('Enjoy your time here!')
		.setColor(0xf5f5dc);
	//member.guild.channels.cache.each(ch => console.log(ch.name))
	const channel = member.guild.channels.cache.find(
		ch => ch.name === '👋welcome'
	);
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Hey ${member}`);
	channel.send(embed);
});

client.on('message', message => {
	console.log(`Logged in as ${client.user.tag}!`);
  if (!message.content.startsWith(prefix) || message.author.bot) return;

	client.user.setActivity('#help | linktr.ee/valcord_ for socials :D');
	const args = message.content.slice(prefix.length).split(/ +/);
	let command = args
		.shift()
		.toLowerCase()
		.trim();

	const msgTime = Date.now();
	const embed = new MessageEmbed()
		.setAuthor(message.author.username, message.author.displayAvatarURL())
		.setTimestamp(Date.now())
		.setColor(0xf5f5dc);

	if (command === 'avatar') command = 'av';
	if (command === 'colour') command = 'color';
	if (command === 'userinfo') command = 'whois';
 
	if (client.commands.has(command)) {
		client.commands.get(command).execute(message, args);
  } /*else {
		client.commands.get('help').execute(message, []);
	}
  */
});
client.login(process.env.DISCORD_TOKEN);
