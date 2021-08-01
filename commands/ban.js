module.exports = {
  name:'ban',
  execute(message, args){
     if(!message.member.hasPermission("BAN_MEMBERS")){return message.reply("You don't have perms")}
      let user = message.mentions.members.first();
      if(!user) {return message.reply("Please ban a valid member!")}
      user.kick(`banned by ${message.author.tag}`)
      message.channel.send(`banned ${user.user.tag}`)
  }
}