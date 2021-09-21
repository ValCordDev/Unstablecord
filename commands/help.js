const { MessageEmbed } = require('discord.js');
const config = require ("../config.js");

module.exports = {
  name:'help',
  description: "This command will show The Bot latency",
  execute(message, args){
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp(Date.now())
      .setColor(config.color)
      .setThumbnail(config.botlogo);
    let helpMsg = "";
    if (args.length >= 1)
      helpMsg = args[0].trim();
    
    if (helpMsg === "misc"){
      embed.setTitle("Misc. commands");
      embed.addField("``" + config.prefix + "app``", "This command will send all the available applications on this server.", false);
      embed.addField("``" + config.prefix + "rules``" , "This command shows all the rules on this server. Go and check them out!", false);
      embed.addField("``" + config.prefix + "socials``", "This command will show every Social platform you could meet ValCord in :D", false);
      embed.addField("``" + config.prefix + "discord``", "This will display all the discord links and services that we are in!", false);
      embed.addField("``" + config.prefix + "av / avatar <@user>``", "This command will display avatar of pinged or author.", false);
      embed.addField("``" + config.prefix + "ping``", "Gets the ping of the server and bot.", false);
      embed.addField("``" + config.prefix + "color / colour``", "Displays the Color That this bot is using across all of the commands.", false);
      embed.addField("``" + config.prefix + "whois / userinfo <@user>``", "Displays Info about user pinged or author.");
      embed.addField("``" + config.prefix + "serverinfo``", "Displays Info about this server.");
      embed.addField("``" + config.prefix + "hi <@someone>``", "A way to say hi to someone");
      embed.addField("``" + config.prefix + "wave <@someone>``", "Wave to someone new maybe?");
      embed.addField("``" + config.prefix + "corona / #covid``", "Will show Covid stats.")
      embed.addField("``" + config.prefix + "covidstats <country>``", "Will show Covid Stats of a specific country");
      embed.addField("``" + config.pregix + "mc <mc_username>``", "Will display stats about the minecraft user.");
      embed.addField("``" + config.prefix + "calculate <number(s)``", "Calculator but on discord.")
      }

    else if(helpMsg === "fun"){
      embed.setTitle("Fun Commands");
      embed.addField("``" + config.prefix + "f <@user>``", "A way to say RIP to a user");
      embed.addField("``" + config.prefix + "meme``", "This will pull up some memes from r/memes and such");
      embed.addField("``" + config.prefix + "avmeme / plane``", "This will show some Aviation memes");
      embed.addField("``" + config.prefix + "pog / pogfish``", "This will show a pog fish");
      embed.addField("``" + config.prefix + "kms``", "Gives A RIP message to you :C");
      embed.addField("``" + config.prefix + "dog``", "for all yall dog lovers out there");
      embed.addField("``" + config.prefix + "cat``", "for all yall cat lovers out there");
      embed.addField("``" + config.prefix + "fox``", "for all yall fox lovers out there");
      embed.addField("``" + config.prefix + "bird``", 'Bird info and the pictures, i guess you can call it "2 birds one stone"')
      embed.addField("``" + config.prefix + "dadjoke``", "This will pull up some not so funny but still worth it jokes/memes")
      embed.addField("``" + config.prefix + "cnjoke``", "This will give you a Chuck Norris Joke.")
      embed.addField("``" + config.prefix + "avs / avmerge <@someone> <@someone>``", "This will merge 2 avatars together")
      embed.addField("``" + config.prefix + "ascii <what text you want to convert>``", "This will create a ascii version of your text")
      embed.addField("``" + config.prefix + "jail <@someone>``", "Jail someone")
      embed.addField("``" + config.prefix + "sudo <@someone> <Message>``", "Impersonate :amogus:")
      embed.addField("``" + config.prefix + "binary``", "Will convert your text into binary codes")
      embed.addField("``" + config.prefix + "clyde <text>``", "Act like clyde wrote that to you...")
      embed.addField("``" + config.prefix + "reverse <text>``", "Reverse text, pretty funny stuff tbh");
      embed.addField("``" + config.prefix + "textflip <text>``", "Flip your text... like, completely");
      embed.addField("``" + config.prefix + "whoisbish``", "who is the actual bish of this server?");
      embed.addField("``" + config.prefix + "urban <word>``", "seach up a word on the best dictionary in the world.");
    }
    
    else if(helpMsg === "games"){
      embed.setTitle("Game commands");
      embed.addField("``" + config.prefix + "rps``", "This will start a game of Rock, Paper, Scissors");
      embed.addField("``" + config.prefix + "8ball / #8b <question>``", "You ask, the 8ball answers with yes or no");
      embed.addField("``" + config.prefix + "howgay``", "How gay are you?")
      embed.addField("``" + config.prefix + "pp``", "How big PP do you have?")
      embed.addField("``" + config.prefix + "coin / coinflip``", "Heads or Tails?")
      embed.addField("More To Come soon! :D", "Stay Tuned :D");
    }
      
    else if(helpMsg === "other"){
      embed.setTitle("Other Commands");
      embed.addField("``" + config.prefix + "suggest <Suggestion>``", "Logs a suggestion to the server.", false);
      embed.addField("``" + config.prefix + "bug <bug>``", "Logs a bug to the server.", false);
      embed.addField("**Moderator commands related**", "These Commands are normally for Moderator + Only:")
      embed.addField("``" + config.prefix + "announce <Message>``", "Broadcasts the Announcement message  (``ADMINISTRATOR`` permission required)", false);
      embed.addField("``" + config.prefix + "bupdate <bot update>``", "Broadcasts the bot update message (``ADMINISTRATOR`` permission required)", false);
      embed.addField("``" + config.prefix + "say <message>``", "Broadcasts a message in the channel. (``Manage_Messages`` permission required)", false);
      embed.addField("``" + config.prefix + "embed <message>``", "Broadcasts a embed message in the channel (``Manage_Messages`` permission required)", false);
    }
    else if(helpMsg === "mod"){
      embed.setTitle("Moderation Commands");
      embed.addField("``" + config.prefix + "ban <@user> <reason>``", "Bans a member from the server.", false);
      embed.addField("``" + config.prefix + "help``", "Displays all the commands of the server.", false);
      embed.addField("``" + config.prefix + "mute <@user>``", "Mutes a user in the server.", false);
      embed.addField("``" + config.prefix + "unmute <@user>``", "Unmutes a user in the server", false);
      embed.addField("``" + config.prefix + "report <@user> <option reason>``", "Reports a user.", false);
      embed.addField("``" + config.prefix + "kick <@user>``", "Kicks a user from the server.", false);
      embed.addField("``" + config.prefix + "cease``", "Forms a Cease line in the channel", false);
      embed.addField("``" + config.prefix + "softban <@user> <reason>``", "Soft bans a user from the server.", false);
      embed.addField("``" + config.prefix + "purge <no. of messages>``", "Deletes a number of messages in a channel.", false);
      embed.addField("``" + config.prefix + "slowmode <time>``", "Puts slowmode on the channel you send it to.");
      embed.addField("``" + config.prefix + "dm <@someone> <message>``", "dm's the person mentioned with a message.")
    }
    else{
      embed.setTitle(`${config.botname} Commands:`);
      embed.addField("Moderation", "``" + config.prefix + "help mod``", true);
      embed.addField("Other", "``" + config.prefix + "help other``", true);
      embed.addField("Misc", "``" + config.prefix + "help misc``", true);
      embed.addField("Games", "``" + config.prefix + "help games``", true);
      embed.addField("Fun", "``" + config.prefix + "help fun``", true);
    }
    message.channel.send(embed);
  }
}
