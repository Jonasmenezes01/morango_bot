const Discord = require('discord.js');
module.exports = {
	name: 'membros',
	description: 'cria invite para entrar no canal de voz',
	execute(message, args,client) {

        if(message.author.id === "287565510982500352"){
            const membros = message.guild.memberCount;
            message.channel.send(`Vou apresentar todos os membros que vejo nesse server, calculando: ${membros} membros`)
            
            message.guild.members.cache.map((membro) =>{
                     message.reply( ` ${membro.user.tag} - ID: ${membro.id}`)}
                     
            )
            }
            message.channel.send('Processo finalizado ou você não é o Kjonh!!')

},
};
