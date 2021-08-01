module.exports = {
  name:'purge',
  description: "purges amount of messages",
  async execute(message, args){
    if (!args[0]) return message.reply("Please enter the amount of messages you want to purge!");
    if (isNaN(args[0])) return message.reply("Please enter a actual number!");
    if (args[0] > 100) return message.reply("You cannot enter a number over 100!");
    if (args[0] < 1) return message.reply("You cannot enter a number less than 1!");

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
      message.channel.bulkDelete(messages);
    })
  }
}

