const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume:1};
let estouProntoo = false;
module.exports = {
	name: 'apenas',
	description: 'Jeremir entra e xinga',
	async execute(message,serverQueue) {
      
        if (message.member.voice.channel){ // agora é voice.channel no lugar de voiceChannel
            var voiceChannel = message.member.voice.channel;
            // Pegamos a referência que comentei acima aqui.
            connection = await message.member.voice.channel.join().then(connection =>{console.log('conectado ao canal!')
            const streame = ytdl('https://www.youtube.com/watch?v=7Rip7XYtz-g', {filter: 'audioonly'});
            const DJA = connection.play(streame, streamOptions);
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