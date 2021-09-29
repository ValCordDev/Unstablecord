const config = require ("../config.js");

module.exports = {
  name:'mute',
  execute(client, message, args){
    const target = message.mentions.users.first();
    if (target){
      let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
      let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
      let memberTarget= message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(muteRole.id);
      message.channel.send(`<@${memberTarget.user.id}> Was muted.`);
    } 
    else {
      message.channel.send("Cant find User!");
    }
  }
}