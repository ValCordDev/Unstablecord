const config = require ("../config.js");

module.exports = {
  name:'unmute',
  execute(message, args){
    const target = message.mentions.users.first();
    if (target){
      let mainRole = message.guild.roles.cache.find(role => role.name === 'Muted');
      let unmuteRole = message.guild.roles.cache.find(role => role.name === 'Member');
      let memberTarget= message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(unmuteRole.id);
      message.channel.send(`<@${memberTarget.user.id}> Was unmuted.`);
    } 
    else {
      message.channel.send("Cant find User!");
    }
  }
}