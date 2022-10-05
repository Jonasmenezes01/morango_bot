const Discord = require('discord.js');
module.exports = {
	name: 'limpar',
	description: 'limpa a quantidade de mensagens mencionado.',
	async execute(message, args) {
        const deleteCount = parseInt(args[0], 10);

        //get the delete count, as an actual number.
      if(!message.member.hasPermission("ADM")){
        message.channel.send("Você precisa do comando ADM para usar esse comando!");
      }
        
        {        
          // Ooooh nice, combined conditions. <3
          if(!deleteCount || deleteCount < 2 || deleteCount > 100){

          let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Para limpar as mensagens use .limpar <quantidade de mensagens>`)
        .setDescription("Forneça um número entre 2 e 100 para o número de mensagens a serem excluídas")
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply(embed);
          }
          
          await message.channel.bulkDelete(deleteCount).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }   
},
};