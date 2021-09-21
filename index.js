const { Client, MessageEmbed, Collection, MessageAttachment } = require("discord.js");
const fs = require('fs'); 
const {Welcomer, Leaver} = require("canvacord");
const Canvas = require("canvas");
const config = require ("./config.js");
const express = require('express')

const port = 3000;
const prefix = config.prefix;
const mySecret = process.env['DISCORD_TOKEN']

const app = express();
const client = new Client();
client.commands = new Collection();



/*var welcomeCanvas ={}
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px sans-serif';
welcomeCanvas.context.fillStyle = 'f5f5dc'

Canvas.loadImage("./bg.png").then(async (img) => {
  welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
  welcomeCanvas.content.fillText("welcome", 360, 360);
  welcomeCanvas.context.beginPath();
  welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
  welcomeCanvas.context.stroke()
  welcomeCanvas.context.fill()
}) */

app.get('/', (req, res) => res.send('monke World!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
// ================= START BOT CODE ===================

/*
Mongoose.connect('mongodb+srv://ValCord:pOx81zone@ytbot.g85r2.mongodb.net/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}).then(console.log('Connected to Mongo!'));
*/

client.on('ready', () => {
  client.user.setActivity('#help | linktr.ee/valcord_ for socials :D', { type: "LISTENING" });
})
//(`[ ${PREFIX}help and ${PREFIX}play ]`, { type: "LISTENING" });
const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "754252071519256587") return;

  //Welcome card
  const welcomeCard = new Welcomer()
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setAvatar(member.user.displayAvatarURL({format: "png"}))
    .setColor(config.color)
    .setColor("username-box", config.color)
    .setColor("discriminator-box", config.color)
    .setColor("message-box", config.color)
    .setColor("border", config.color)
    .setColor("avatar", config.color)
    .setBackground("https://cdn.discordapp.com/attachments/871081165208047716/876821477880660008/Welcome_1.png")
    .setMemberCount(member.guild.memberCount);
  let attachment = new MessageAttachment(await welcomeCard.build(), "welcome.png");
  member.guild.channels.cache.get("876828141799239770").send(member.user.toString(), attachment);
  //End welcome card

  //Another welcome card
  let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Member');
  let mainRanks = member.guild.roles.cache.find(role => role.name === '║--------------Main Roles--------------║');
  let otherRanks = member.guild.roles.cache.find(role => role.name === '║--------------Other Roles--------------║');
  let serverGameRanks = member.guild.roles.cache.find(role => role.name === '║----------Server Game Roles----------║');
  let pingRanks = member.guild.roles.cache.find(role => role.name === '║-------------Pinging roles-------------║');
	member.roles.add(welcomeRole);
  member.roles.add(mainRanks);
	member.roles.add(otherRanks);
	member.roles.add(serverGameRanks);
	member.roles.add(pingRanks);
	
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
		.setColor(config.color);
	
  const channel = member.guild.channels.cache.find(ch => ch.name === '👋welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Hey ${member}`);
  channel.send(embed);
  //End another welcome card
});

client.on("guildMemberRemove", async member => {
  if(member.guild.id !== "754252071519256587") return;
  const welcomeCard = new Leaver()
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setAvatar(member.user.displayAvatarURL({format: "png"}))
    .setColor(config.color)
    .setColor("username-box", config.color)
    .setColor("discriminator-box", config.color)
    .setColor("message-box", config.color)
    .setColor("border", config.color)
    .setColor("avatar", config.color)
    .setBackground("https://cdn.discordapp.com/attachments/871081165208047716/876821477880660008/Welcome_1.png")
    .setMemberCount(member.guild.memberCount);
  let attachment = new MessageAttachment(await welcomeCard.build(), "bye.png");
  member.guild.channels.cache.get("866650203330576384").send(member.user.toString(), attachment);
});

client.on("message", async (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	let command = args
		.shift()
		.toLowerCase()
		.trim();

	const msgTime = Date.now();
	const embed = new MessageEmbed()
		.setAuthor(message.author.username, message.author.displayAvatarURL())
		.setTimestamp(Date.now())
		.setColor(config.color);

	if (command === 'avatar') command = 'av';
	if (command === 'colour') command = 'color';
	if (command === 'userinfo') command = 'whois';
  if (command === '8b') command = '8ball';
  if (command === 'planememe') command = 'avmeme';
  if (command === 'aviationmeme') command = 'avmeme';
  if (command === 'plane') command = 'avmeme';
  if (command === 'lvl') command = 'level';
  if (command === 'pogfish') command = 'pog';
  if (command === 'avatarmerge') command = 'avs';
  if (command === 'avmerge') command = 'avs';
  if (command === 'sav') command = 'serveravatar';
  if (command === 'serverav') command = 'serveravatar';
  if (command === 'covid') command = 'corona';
  if (command === 'coinflip') command = 'coin';
 
	if (client.commands.has(command)) {
		client.commands.get(command).execute(message, args);
  }
});

client.login(process.env.DISCORD_TOKEN);
