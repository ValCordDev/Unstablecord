const { MessageEmbed, Permissions } = require('discord.js');
const config = require ("../config.js"); 

module.exports = {
	name: 'roleperms',
	execute: async (client, message, args) => {
		// code starts here
		try {
			const roleName = message.guild.roles.cache
				.find((r) => (r.name === args.toString()) || (r.id === args.toString()));

			const perms = new Permissions(roleName.permissions.bitfield).toArray();

			const embed = new MessageEmbed()
				.setColor(config.color)
				.setTitle(roleName.name)
				.addFields(
					{
						name: 'Role ID: ',
						value: roleName.id,
						inline: true,
					},
					{
						name: 'Role Name: ',
						value: roleName.name,
						inline: true,
					},
					{
						name: 'Mentionable: ',
						value: roleName.mentionable ? 'Yes' : 'No',
						inline: true,
					},
					{
						name: 'Role Permissions: ',
						value: perms.join(', \n'),
					},
				);

			return message.channel.send(embed);
		} catch (e) {
			return message.channel.send('Role Doesn\'t Exist').then(() => console.log(e));
		}
	},
};