const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume:5};
let estouProntoo = false;
module.exports = {
	name: 'tiringa',
	description: 'Jeremir chama tiringa para xingar',
	async execute(message,serverQueue) {
      
        if (message.member.voice.channel){ // agora é voice.channel no lugar de voiceChannel
            var voiceChannel = message.member.voice.channel;
            // Pegamos a referência que comentei acima aqui.
            connection = await message.member.voice.channel.join().then(connection =>{console.log('conectado ao canal!')
            const DJA = connection.play('./audios/tiringa.mp3');
          DJA.on("finish", end => {
                voiceChannel.leave();
                console.log('saiu do canal')
                });
            })
            estouProntoo = true;
      } else {
          
          message.channel.send('Entra em uma canal de voz ai!!');
      }

	},
};