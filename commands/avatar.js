const Discord = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'mostra imagem do perfil da pesoa mencionada',
	execute(message) {
        if (!message.mentions.users.size) {
            const imagemA = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`Seu avatar`)
    .setImage(message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setTimestamp()
    .setFooter('BOT Jeremir');
            return message.channel.send(imagemA);
        }
    
        const avatarList = message.mentions.users.map(user => {
            const imagemb = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Avatar do ${user.username}`)
            .setImage(user.displayAvatarURL({ format: "png", dynamic: true }))
            .setTimestamp()
            .setFooter('BOT Jeremir');
            return message.channel.send(imagemb);
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
       // message.channel.send(avatarList);
    }
};