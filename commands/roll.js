const Discord = require('discord.js');
module.exports = {
	name: 'roll',
	description: 'Roleta russa da sorte',
	execute(message, args,client) {

        randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
        if(randomNumber == 2){
            message.reply("Se fudeo kkkkk")
        }
        else{
            message.reply("Boa, viveu!")
        }
    

},
};