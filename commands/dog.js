const Discord = require('discord.js');
const superagent = require("superagent")
module.exports = {
	name: 'dog',
	description: 'imagem de um doguinho :3',
	async execute(message, args,client) {
        let usuario = message.mentions.members.first() || message.member;
        let nsg = await message.channel.send("Procurando...")
    
        let { body } = await superagent
            .get('https://dog.ceo/api/breeds/image/random')
        //console.log(body.file)
        if (!{ body }) return message.channel.send("Try...")
    
        let cEmbed = new Discord.MessageEmbed()
    
            .setColor("RANDOM")
            .setAuthor(`Olha Esse CACHORRINHO <3`, message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter(`${usuario.user.username} pediu o comando :3`, usuario.user.displayAvatarURL)
        message.channel.send({ embed: cEmbed })
    
        nsg.delete()
}
};