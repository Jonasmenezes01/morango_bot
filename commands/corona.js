const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const api = require('novelcovid');

module.exports = {
	name: 'corona',
	description: 'mostra os valores de casos do corona em tempo real',
	async execute(message, args,client) {

        if(!args[0]) {
            return message.channel.send("Pesquise um país, estado ou obtenha informações de todos os paises digitando: .Corona all.");
          }
      
          if(args[0] === "all") {
            //if they entered all as the first argument, get information from all countries
            await api.all().then((data) => {
              //create an embed with the information and send it to the channel
              let usuario = message.mentions.members.first() || message.member;
              let embed = new MessageEmbed()
                .setTitle("Global Cases")
                .setColor('RANDOM')
                .addField("Total de Casos", data.cases, true)
                .addField("Total de mortes", data.deaths, true)
                .addField("Total Recuperado", data.recovered, true)
                .addField("Casos de hoje", data.todayCases, true)
                .addField("Mortes de hoje", data.todayDeaths, true)
                .addField("casos ativos", data.active, true)
                .setFooter(`© ${message.guild.me.displayName}`, usuario.user.displayAvatarURL());
            
              return message.channel.send(embed);
            }).catch(err => console.log(err));
            
            
          } else if (args[0] === "state"){
            //if they entered state as the first argument go into this block
      
            //check if they entered second argument
            if(!args[1]){
                return message.channel.send("You have to enter a state to search for!");
            } else{
              //add everything after the first argument together separated by a space
              let state = args.slice(1).join(' ');
      
              //attempt to search for that state
              await api.states({state: state}).then((data) => {
                if(data.state === undefined) return message.channel.send("Are you sure that state exists?");
                //send an embed with the information
                let embed = new MessageEmbed()
                  .setTitle(`${data.state}`)
                  .setColor('RANDOM')
                  .addField("Total de Casos", data.cases, true)
                  .addField("Total de mortes", data.deaths, true)
                  .addField("Casos de hoje", data.todayCases, true)
                  .addField("Mortes de hoje", data.todayDeaths, true)
                  .addField("casos ativos", data.active, true)
                  .setFooter(`© ${message.guild.me.displayName}`, usuario.user.displayAvatarURL());
                
                return message.channel.send(embed);
              }).catch(err => console.log(err));
            }
          } else{
            //if they didn't enter all or state as the first search term go into this block
      
            //add the terms together separated by a space
            let country = args.slice(0).join(' ');
      
            //attempt to search for information on that country
            await api.countries({country: country}).then((data) => {
              if(data.country === undefined) return message.channel.send("Are you sure that country exists?");
              
              //create an embed with the data and send it to the channel
              let usuario = message.mentions.members.first() || message.member;
              let embed = new MessageEmbed()
                .setTitle(`${data.country}`)
                .setColor('RANDOM')
                .addField("Total de Casos", data.cases, true)
                .addField("Total de mortes", data.deaths, true)
                .addField("Total Recuperado", data.recovered, true)
                .addField("Casos de hoje", data.todayCases, true)
                .addField("Mortes de hoje", data.todayDeaths, true)
                .addField("casos ativos", data.active, true)
                .setFooter(`© ${message.guild.me.displayName}`, usuario.user.displayAvatarURL());
                  
              return message.channel.send(embed);
            }).catch(err => console.log(err));
          }
        
    

},
};