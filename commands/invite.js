const Discord = require('discord.js');
module.exports = {
	name: 'invite',
	description: 'cria invite para entrar no canal de voz',
	execute(message, args,client) {

        const setChannelID = message.content.split(' ');

        try{
            message.guild.channels.cache.get(setChannelID[1]).createInvite().then(invite =>
                message.channel.send("O convite para entrar nessa sala de voz foi criado: \n" + invite.url)
            );
        }
        
        catch(error){
            console.error(`não posso criar invite para essa sala, talvez eu precise de cargos altos...error : ${error}`);
            message.channel.send(`Use .invite <ID da sala de voz>`);
        }
},
};
