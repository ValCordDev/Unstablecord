const config = require ("../config.js");  
const { Command } = require('discord.js-commando');

module.exports = {
  name:'reverse',
  execute(message, args){
       var argsString = args.toString();
       var noCommas = argsString.replace(/,/g, " ");
       var splitString = noCommas.split("");
       var reversed = splitString.reverse();
       var finalString = reversed.toString();
       finalStringNoCommas = finalString.replace(/,/g, "")
       finalStringNoCommasAndNoSpace = finalStringNoCommas.trim();
       message.say("Your Reversed String:\n ``" + finalStringNoCommasAndNoSpace + "``");
	}
};
   