
const { Client, MessageEmbed, Collection } = require('discord.js');

module.exports = {
  name:'cease',
  description: "This command will show The Bot latency",
  execute(message, args){
    const msgTime = Date.now();
    const embed = new MessageEmbed() 
    if(!message.member.hasPermission("MANAGE_MESSAGES")){return message.reply("You don't have perms to do this command")}
    embed.setTitle("**CEASE LINE**")
    .setColor(0xF5F5DC)
    .setDescription(":warning: **ALERT:** A Cease Line has been called! \n" + 
    "============== \n" + 
    "``Cease Your Conversation!`` \n" + 
    "============== \n" + "(aka. Stop discussing the topic and move on or expect a mute)")
  message.channel.send(embed).then((msg) =>{
      message.delete();
    });
  }
}

