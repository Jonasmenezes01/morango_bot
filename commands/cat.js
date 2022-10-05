const Discord = require('discord.js');
const superagent = require("superagent")
module.exports = {
	name: 'cat',
	description: 'imagem de um gatinho :3',
	async execute(message, args,client) {
        let usuario = message.mentions.members.first() || message.member;
        let nsg = await message.channel.send("Procurando...")
    
        let { body } = await superagent
            .get('http://aws.random.cat/meow')
        //console.log(body.file)
        if (!{ body }) return message.channel.send("Try...")
    
        let cEmbed = new Discord.MessageEmbed()
    
            .setColor("RANDOM")
            .setAuthor(`Olha que gatinho FOFO😻 :3`, message.guild.iconURL)
            .setImage(body.file)
            .setTimestamp()
            .setFooter(`${usuario.user.username} pediu o comando :3`, usuario.user.displayAvatarURL)
        message.channel.send({ embed: cEmbed })
    
        nsg.delete()
}
};