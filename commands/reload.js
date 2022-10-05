const Discord = require('discord.js');
const { token } = require("../config.json");
module.exports = {
	name: 'reload',
	description: 'reinicia o bot?',
	execute(message, args,client) {

        if (message.author.id !== '287565510982500352') return;
        message.channel.send('Reiniciando... Isso demora 10 segundos.').then(() => {
        process.exit(1);
        })

},
};