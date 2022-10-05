const Discord = require('discord.js');
module.exports = {
	name: 'userinfo',
	description: 'cria invite para entrar no canal de voz',
	execute(message, args,client) {

        let estados = {
            "online": "🔵Conectado",
            "offline": "⚪Desconectado",
            "idle": "⚫Ocupado",
            "dnd": "🔴Não pertubar"
    
        }
        let usuario = message.mentions.members.first() || message.member;
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`informações do ${usuario.user.username}`)
            .setThumbnail(usuario.user.displayAvatarURL())
            .addField(`Nome completo`, `${usuario.user.tag}`)
            .addField(`Nick`, `${usuario.displayName}`)
            .addField(`ID`, `${usuario.id}`)
            .addField(`Estado`, `${estados[usuario.presence.status]}`)
            .addField(`Cargos`, `${usuario.roles.cache.map(m => m).join(" **|** ")}`)
        return message.channel.send(embed)
},
};
