const Discord = require('discord.js');
module.exports = {
	name: 'beijar',
    description: 'beija um membro',
	execute(message,client) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        if (args.length === 0) return message.reply("Mencione um membro🥰 ");
        let usuario = message.mentions.members.first() || message.member;
        let gifs = [
            "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865",
            "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",
            "https://media.tenor.com/images/8cf98d92c54ee938e1c6617ad8c0e167/tenor.gif",
            "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
            "https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif",
            "https://media.tenor.com/images/12b26e30f1d526db62847bede9bbd414/tenor.gif",
            "https://i.imgur.com/4Ad9iwh.gif",
            "https://i.pinimg.com/originals/29/65/3a/29653ad6e372605c4c43c3c015f9e499.gif",
            "https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif",
            "https://media1.tenor.com/images/d7542a2525f4d92f1ee0b14c21470665/tenor.gif?itemid=6492071",
            "https://i.pinimg.com/originals/14/04/3a/14043a566bd7faa074b4761875ed3dd4.gif",
            "https://uploads.disquscdn.com/images/964bd0189d1674220997816c271470bf5f2c32860ee5bcf63d50031fbc82a0cd.gif",
            "https://data.whicdn.com/images/312788666/original.gif",
        ]
        var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    
        let embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor("RANDOM")
            .setDescription(`**❤️${message.member} Beijou ${usuario.user}❤️**`)
            .setImage(randomGif)
            .setFooter(`Casal lindo 🤩`)
        return message.channel.send(embed)
	},
};