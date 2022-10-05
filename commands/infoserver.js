const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {
	name: 'infoserver',
	description: 'informações do server',

	async execute(message, args, client) {
    function checkBots(guild) {
      let botCount = 0;
      guild.members.cache.forEach(member => {
          if(member.user.bot) botCount++;
      });
      return botCount;
  }
  
  function checkMembers(guild) {
      let memberCount = 0;
      guild.members.cache.forEach(member => {
          if(!member.user.bot) memberCount++;
      });
      return memberCount;

  }
  function formatDate (template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
  }
  function formatDate (template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
  }
  const date = message.guild.createdAt
  const joined = message.member.joinedAt

  const region = {
    brazil: ':flag_br: Brazil'
  }
      let gAvatar = message.guild.iconURL();
      const guild = message.guild; // Gets guild from the Message object
      if(!guild.available) return; // Stops if unavailable
      await message.guild.members.fetch(message.guild.ownerID) // Fetches owner
      .then(guildMember => sOwner = guildMember) // sOwner is the owner 

      const embeded = new Discord.MessageEmbed()
  
        // .setThumbnail(message.guild.iconURL)
        .setColor("RANDOM")
        .setAuthor(`Informações do Servidor: ${message.guild.name}!!`)
        .setThumbnail(gAvatar)
        .addField(`Fundador🤵`,guild.member(sOwner) ? sOwner.toString() : guild.owner.user.tag , true)
        .addField(`ID🌐`, message.guild.id, true)
        .addField('**Região🌎**', region[message.guild.region], false)
        .addField("Total | Humans | Bots", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        .addField('Membros totais📌', message.guild.memberCount, false )
        .addField('**Canais📌**', `${message.guild.channels.cache.size} no total.`, true)
        .addField('**Cargos📌**', `${message.guild.roles.cache.size} no total.`,true)
        .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
        .addField('**Você entrou em**', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))
        .setFooter('2020 © BOT Jeremir')
        .setTimestamp()
  return message.channel.send(embeded);
  
}}
