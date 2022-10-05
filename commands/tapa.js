const Discord = require('discord.js');
module.exports = {
	name: 'tapa',
	description: 'taca um tapa em um membro',
	execute(message,client) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        if (args.length === 0) return message.reply("Você quer dar tapa em quem? É só mencionar!!!😂 ");
    let usuario = message.mentions.members.first() || message.member;
    let gifs = [

        "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
        "https://lh4.ggpht.com/_zm5ppTGsmNE/TJduTSmjGjI/AAAAAAAAAEs/XU0WpSuCsGg/tapa.gif",
        "https://gifsec.com/wp-content/uploads/GIF/2014/03/Slow-motion-slap-GIF.gif",
        "https://media1.giphy.com/media/l4EpjIzBK1T4EThG8/giphy.gif",
        "https://i.pinimg.com/originals/43/a3/0a/43a30a58f59d591b5791879f985d5e95.gif",
        "https://media.tenor.com/images/e5b314426d5a7578a2653098d6df5750/tenor.gif",
        "https://i.pinimg.com/originals/84/8b/ce/848bce754d3bb524c1e71a781fdb71c4.gif",
        "https://2.bp.blogspot.com/-88thADCtT7c/Uq-Xov4LzNI/AAAAAAAAG-w/WEgAUt6J52c/s475/como_conseguir_um_beijo.gif",
        "https://thumbs.gfycat.com/GeneralColossalChital-small.gif",
        "https://media.tenor.com/images/bd092fb261df4588a51f9dd1f4815fea/tenor.gif",
        "https://media.tenor.com/images/331da68b1d095706b8ee526eb3be8ae3/tenor.gif",
        "https://thumbs.gfycat.com/ImpoliteHilariousGelding-size_restricted.gif",
        "https://media.tenor.com/images/39aedb53fe19076a0dcea54e2e8fef73/tenor.gif",
        "https://i.gifer.com/YHYx.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzWGISOp87byCg8_qGxKvyoB4iZHjB58pU1w&usqp=CAU",
        "https://thumbs.gfycat.com/ExcellentSoreChameleon-size_restricted.gif",
        "https://2.bp.blogspot.com/-JrEMAWt5_Es/V0DR6dn6PtI/AAAAAAAAQ6w/8Kf740czagw7uGFjN22BRlxlZto2kOctwCLcB/s1600/gif_mulher_levando_tapa.gif",
        "https://lh4.ggpht.com/_zm5ppTGsmNE/TJduTSmjGjI/AAAAAAAAAEs/XU0WpSuCsGg/tapa.gif",
        "https://i.makeagif.com/media/12-02-2017/TOC10D.gif",
        "https://thumbs.gfycat.com/MeatySimilarGrayfox-size_restricted.gif",
        "https://thumbs.gfycat.com/WhisperedPerkyCock-max-1mb.gif",
        "https://thumbs.gfycat.com/AdolescentCrispGreathornedowl-max-1mb.gif",
        "https://i.pinimg.com/originals/33/e3/dd/33e3ddaa708619e4c3c2a33dcb5d6f36.gif",
        "https://thumbs.gfycat.com/ThornyBaggyCockerspaniel-size_restricted.gif",


    ]
    var randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    let embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setDescription(`**${message.member} Deu um tapa em ${usuario.user}😅**`)
        .setImage(randomGif)
        .setFooter(`Vish, Essa doeu!!😅`)
    return message.channel.send(embed)
	},
};