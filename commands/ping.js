const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'Lat礙ncia do Jeremir e sua lat礙ncia',
	async execute(message, args, client) {
        const ms = await message.channel.send("????Analisando????")
        ms.edit('????????Analisando????????')
        ms.edit('????????????Analisando????????????')
        ms.edit('????????Analisando????????')
        ms.edit('????Analisando????');
        const clientms = ms.createdTimestamp - message.createdTimestamp;
        let embed = new Discord.MessageEmbed()
    
            .setTitle(`???·INGS???︶)
            .setThumbnail('https://cdn.discordapp.com/attachments/222057613477543936/787457596952281139/jeremir.png')
            .addField(`????Lat礙ncia BOT????`, `${Math.round(message.client.ws.ping)} ms`)
            .addField(`????Sua Lat礙ncia????`, `${ clientms }ms`)
            .setColor("RANDOM")
            .setFooter("BOT", 'https://cdn.discordapp.com/attachments/222057613477543936/787457596952281139/jeremir.png');
    
        ms.edit(embed);
}
};