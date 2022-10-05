const Discord = require('discord.js');
module.exports = {
	name: 'ban',
	description: 'Da ban no membro selecionado',
	execute(message, args) {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!message.member.hasPermission("BAN")){
            message.channel.send("Você precisa do cargo BAN ou ADM para usar esse comando!");
        }
    
        else{
            let aprender = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("**Use .ban <@usuário> <motivo> **")
            .addField(`**Cargo necessário:**`,'BAN', true)
            if(!member)
                return message.channel.send(aprender);
            if(!member.bannable) 
                return message.channel.send("Cara, eu nao sei o motivo, mas nao consigo banir esse bixo ai ;-;");
    
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "A razão não foi informada";
    
            member.ban({reason: reason})
                .catch(error => message.channel.send(`Foi mal ${message.author} esse bixo ai nao pode ser banido!`));
                const banzada = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`**${message.author.tag}** baniu **${member.user.tag}** do servidor!!!`)
                .addField(`**Motivo:**`,reason, true)
                .setThumbnail("https://i.imgur.com/ZmWM1UT.png")
                .setFooter("© Jeremir ADM")
            message.channel.send(banzada);
        }


},
};