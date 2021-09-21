const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'rules',
  execute(message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(0xF5F5DC)
      .setTitle("**If any rules in this list or Discord's TOS in any way gets violated or   bypassed, action taking will result in appropriate consequence (ban/mute/kick)**")
      .setDescription("**§1.1 No Toxicity ( Including Racism ) is allowed. It will start     with a warning after that its a ban!**\n\n" + 
      "**§1.2 No Usage of IRL Money as currency ( Paypal, BTC ) ONLY ingame coins**\n\n" + 
      "**§1.3 Scamming will cause in a report / ban from the discord.**\n\n" + 
      "**§1.4 No advertising of any servers this will result in a straight ban. (If not in <#831261139420971009>)** \n\n" + 
      "**§1.5 (Different) No DM advertising (Dming other servers to members)** \n\n" + 
      "**§1.6 Any NSFW images will result in an instant ban (Toxicity aswell)** \n\n" + 
      "**§1.7 Use the respected channels for the respected content!**\n\n" +
      "**§1.8 No links that lead to sketchy websites** \n\n" + 
      "**§1.9 No begging (any circumstances)**\n\n" +
      "**§2.0 No Staff Or Member Disrespect.**");
      message.channel.send(embed);
  }
}
