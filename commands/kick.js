const Discord = require('discord.js');
module.exports = {
	name: 'kick',
	description: 'Expulsa um membro mencionado',
	async execute(message, args, client) {

       if(!message.member.hasPermission("kicker")){
        message.channel.send("Você precisa do cargo BAN, kicker ou adm para usar esse comando!");
     }
        let aprenderkick = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**use .kick <@usuário> <motivo>  **")
        .addField(`**Cargo necessário:**`,'kicker', true)
      let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if(!member)
        return message.reply(aprenderkick);
      if(!member.kickable) 
        return message.reply("😩Cara, esse bixo ai é foda, nao tenho autoridade sobre ele. 😩");
      
      // slice(1) removes the first part, which here should be the user mention or ID
      // join(' ') takes all the various parts to make it a single string.
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Sem motivo falado";
      
      // Now, time for a swift kick in the nuts!
      let usuario = message.mentions.members.first() || message.member;
      const kickzada = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${message.author.tag} expulsou ${member.user.tag} do servidor!!!`)
      .addField(`**Motivo:**`,reason, true)
      .setThumbnail("https://clipart.coolclips.com/480/vectors/tf05051/CoolClips_cart1014.png")
      .setFooter("© Jeremir ADM")
      await member.kick(reason)
        .catch(error => message.reply(`Foi mal ${message.author} nao consegui por causa de: ${error}`));
      message.reply(kickzada);
},
};