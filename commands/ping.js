const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'Latência do Jeremir e sua latência',
	async execute(message, args, client) {
        const ms = await message.channel.send("🤖Analisando🤖")
        ms.edit('🤖🤖Analisando🤖🤖')
        ms.edit('🤖🤖🤖Analisando🤖🤖🤖')
        ms.edit('🤖🤖Analisando🤖🤖')
        ms.edit('🤖Analisando🤖');
        const clientms = ms.createdTimestamp - message.createdTimestamp;
        let embed = new Discord.MessageEmbed()
    
            .setTitle(`📡PINGS📡`)
            .setThumbnail('https://cdn.discordapp.com/attachments/222057613477543936/787457596952281139/jeremir.png')
            .addField(`🤖Latência BOT🤖`, `${Math.round(message.client.ws.ping)} ms`)
            .addField(`😁Sua Latência😁`, `${ clientms }ms`)
            .setColor("RANDOM")
            .setFooter("BOT", 'https://cdn.discordapp.com/attachments/222057613477543936/787457596952281139/jeremir.png');
    
        ms.edit(embed);
}
};