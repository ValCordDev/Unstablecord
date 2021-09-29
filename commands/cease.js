const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'cease',
  description: "This command will show The Bot latency",
  execute(client, message, args){
    const embed = new MessageEmbed() 
    if(!message.member.hasPermission("MANAGE_MESSAGES")){return message.reply("You don't have perms to do this command")}
    embed.setTitle("**CEASE LINE**")
    .setColor(config.color)
    .setDescription(":warning: **ALERT:** A Cease Line has been called! \n" + 
    "============== \n" + 
    "``Cease Your Conversation!`` \n" + 
    "============== \n" + "(aka. Stop discussing the topic and move on or expect a mute)")
  message.channel.send(embed).then((msg) =>{
      message.delete();
    });
  }
}

