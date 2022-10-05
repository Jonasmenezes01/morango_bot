const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');
module.exports = {
	name: 'tempo',
	description: 'mostra como está o tempo.',
	execute(message, args,client) {

        let degree;
        //check if the user entered a first arg
        if(args[0]){
          //check if the first argument was a valid degree type
          if(args[0] === "C" || args[0] === "c" || args[0] === "F" || args[0] === "f"){
              degree = args[0].toUpperCase();
          } else{
              return message.channel.send("Coloque qual unidade de temperatura (C | F). Exemplo: .tempo c fortaleza");
          }
        } else{
          return message.channel.send("Coloque qual unidade de temperatura (C | F). Exemplo: .tempo c fortaleza");
        }
  
        //check if there was a second arg
        if(!args[1]) return message.channel.send("Coloque o nome do local para persuisar");
  
        //search for the location and specify degree type
        weather.find({search: args[1], degreeType: degree}, function(err, result) {
          try{
            //TODO: add a 5 day forecast
  
            //create a new embed with the weather data
            let usuario = message.mentions.members.first() || message.member;
            let embed = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle(`Tempo`)
              .setThumbnail(result[0].current.imageUrl)
              .setDescription(`Mostrando dados meteorológicos para ${result[0].location.name}`)
              .addField("**Temperatura:**", `${result[0].current.temperature}°${result[0].location.degreetype}`, true)
              .addField("**Tempo:**", `${result[0].current.skytext}`, true)
              .addField("**Dia:**", `${result[0].current.shortday}`, true)
              .addField("**Sensação térmica:**", `${result[0].current.feelslike}°${result[0].location.degreetype}`, true)
              .addField("**Umidade:**", `${result[0].current.humidity}%`, true)
              .addField("**Vento:**", `${result[0].current.winddisplay}`, true)
              .setFooter(`© ${message.guild.me.displayName}`, usuario.user.displayAvatarURL());
  
            message.channel.send(embed); 
          } catch(err){
            console.log(err); //log an error to the console if one occurs
  
            return message.channel.send("Esse lugar existe? o.0"); //return message to channel
          }
        });
    

},
};