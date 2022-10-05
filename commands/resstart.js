const Discord = require('discord.js');
const curl = require("curl")
module.exports = {
	name: 'rs',
	description: 'rs',
	execute(message, args, client) {
    if(!message.member.hasPermission("ADM")) return;
        message.channel.send('reiniciando... demora 2 min').then(() => {
            process.exit(1);
          })
},
};