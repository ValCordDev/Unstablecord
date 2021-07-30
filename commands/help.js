
const { Client, MessageEmbed, Collection } = require('discord.js');

module.exports = {
  name:'help',
  description: "This command will show The Bot latency",
  execute(message, args){
    const msgTime = Date.now();
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(0xF5F5DC)
      .setThumbnail("https://cdn.discordapp.com/attachments/856478864581459968/864909862382993429/Val.png");
    let helpMsg = "";
    if (args.length >= 1)
      helpMsg = args[0].trim();
    
    if (helpMsg === "misc"){
      embed.setTitle("Misc. commands");
      embed.addField("``#app``", "This command will send all the available applications on this server.", false);
      embed.addField("``#rules``", "This command shows all the rules on this server. Go and check them out!", false);
      embed.addField("``#socials``", "This command will show every Social platform you could meet ValCord in :D", false);
      embed.addField("``#discord``", "This will display all the discord links and services that we are in!", false);
      embed.addField("``#av / #avatar <@user>``", "This command will display avatar of pinged or author.", false);
      embed.addField("``#ping``", "Gets the ping of the server and bot.", false);
      embed.addField("``#afk``", "Set's an AFK message for the user.", false);
      embed.addField("``#color / #colour``", "Displays the Color That this bot is using across all of the commands.", false);
      embed.addField("``#whois / #userinfo <@user>``", "Displays Info about user pinged or author.")
      embed.addField("``#serverinfo``", "Displays Info about this server.")
      embed.addField("``#f <@user>``", "A way to say RIP to a user")
      
    }
    else if (helpMsg === "other"){
      embed.setTitle("Other Commands");
      embed.addField("``#suggest <Suggestion>``", "Logs a suggestion to the server.", false);
      embed.addField("``#bug <bug>``", "Logs a bug to the server.", false);
      embed.addField("**Moderator commands related**", "These Commands are normally for Moderator + Only:")
      embed.addField("``#announce <Message>``", "Broadcasts the Announcement message  (``ADMINISTRATOR`` permission required)", false);
      embed.addField("``#bupdate <bot update>``", "Broadcasts the bot update message (``ADMINISTRATOR`` permission required)", false);
      embed.addField("``#say <message>``", "Broadcasts a message in the channel. (``Manage_Messages`` permission required)", false);
      embed.addField("``#embed <message>``", "Broadcasts a embed message in the channel (``Manage_Messages`` permission required)", false);
    }
    else if(helpMsg === "mod"){
      embed.setTitle("Moderation Commands");
      embed.addField("``#ban <@user> <reason>``", "Bans a member from the server.", false);
      embed.addField("``#help``", "Displays all the commands of the server.", false);
      embed.addField("``#mute <@user>``", "Mutes a user in the server.", false);
      embed.addField("``#unmute <@user>``", "Unmutes a user in the server", false);
      embed.addField("``#warn <@user>``", "Warns a user.", false);
      embed.addField("``#warnings <@user>``", "Displays all the past warnings of a user.", false);
      embed.addField("``#clearwarnings <@user>``", "Clears all the warnings of a user.", false);
      embed.addField("``#report <@user> <option reason>``", "Reports a user.", false);
      embed.addField("``#kick <@user>``", "Kicks a user from the server.", false);
      embed.addField("``#cease``", "Forms a Cease line in the channel", false);
      embed.addField("``#addrole <@user> <role>``", "Adds a role to a User.", false);
      embed.addField("``#removerole <@user> <role>``", "Removes a role from a User", false);
      embed.addField("``#softban <@user> <reason>``", "Soft bans a user from the server.", false);
      embed.addField("``#purge <no. of messages>``", "Deletes a number of messages in a channel.", false);
    }
    else if(helpMsg === "levels"){
      embed.setTitle(":chart_with_upwards_trend: Level Commands");
      embed.addField("``#rank``","Displays your current level, rank and experience.", false);
      embed.addField("``#lb``", "Gives a link for the server leaderboard", false);
    }
    else if(helpMsg === "memes"){
      embed.setTitle(":rofl: Meme Commands");
      embed.addField("``#memes``", "Returns a list of meme templates." , false);
      embed.addField("``#create_meme <#id> <quote1, quote2,>``", "Creates a meme from a supplied template ID", false);
      //embed.addField("````", "", false);
    }
    else{
      embed.setTitle("UnstableCord Commands:");
      embed.addField("Moderation", "``#help mod``", true);
      embed.addField("Other", "``#help other``", true);
      embed.addField("Levels", "``#help levels``", true);
      embed.addField("Memes", "``#help memes``", true);
      embed.addField("Misc", "``#help Misc``", true);
    }
    message.channel.send(embed);
  }
}
