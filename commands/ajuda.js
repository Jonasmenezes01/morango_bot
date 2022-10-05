const Discord = require('discord.js');
module.exports = {
	name: 'ajuda',
	description: 'Ajuda',
	execute(message, args,client, prefix) {
        const ajuda1 = new Discord.MessageEmbed()
           .setAuthor(`Ajuda do Jonhbot`)
           .setDescription(`Olá, ${message.author}, sou um bot que ganhou vida propria e quem manda nessa poha sou eu, segue meus comandos ai vagabundo...\n\nPrefix no servidor **${message.guild.name}**: **.**`)
           .addField(":question: Suporte:", "[Clique aqui](https://discord.gg/XUYDQ4x)")
           .addField(`:computer: Para me adicionar no seu servidor:`,"[Clicar aqui](https://discordapp.com/oauth2/authorize?client_id=529107017583951887&scope=bot&permissions=8)")
           .setColor("#22a7cc")
           .setFooter("© O JonhBot foi criador por Kjonh#3350")
    
           const categoria = new Discord.MessageEmbed()
            .setAuthor(`Escolha uma categoria...`)
            .setDescription("\n**👮 Moderação**\n• `ban`, `mute`, `anuncio`, `limpar`, `kick`...\n\n**📋 Outros**\n• `serverinfo`, `avatar`, `convite`, `avatar`, `say`...\n\n**🎵 Música**\n• `tocar`, `parar`, `pular`, `playlist`, `tocando`...")
            .setColor("#139ec7")
    
           const ajuda2 = new Discord.MessageEmbed()
                .setTitle(`👮 Moderação`)
                .setDescription(`*Comandos para administrar servidores!* 
    **.ban** \`@usuário e motivo\` - Irá banir o usuário do server(cargo: BAN).
    **.kick** \`@usuário e motivo\` - Irá kickar o usuário mencionado(cargo:KICK; ADM).
    **.anuncio** \`mensagem do anuncio\` - Irá mandar um anuncio para os membros do servidor no PV(ADM).
    **.limpar** \`número de mensagens\` - Irá limpar o número de mensagens.
    **.ping** - mostra ping do bot e o seu.
    **.removerbot** \`id\` - comando exclusivo.`)
                .setThumbnail("https://i.imgur.com/ZmWM1UT.png")
                .setColor("#ff0000")
                .setFooter("© JEREMIR")
    
                const ajuda3 = new Discord.MessageEmbed()
                    .setTitle(`📋 Outros`)
                    .setDescription(`*Comandos que são "aleatorios" que podem te ajudar ou não!!* \n
    \n**.ajuda** - Irá te mandar a lista de comandos.
    **.botinfo** - Irá mostrar as informaçoes de mim. 
    **.avatar** \`@usuário\` - Irá mostrar o avatar de um usuário.
    **.tapa** \`@usuário\`- Irá mostrar um gif dando tapa na pessoa.
    **.beijar** \`@usuário\`- Irá mostrar um gif beijando a pessoa.
    **.roll** - roleta russa com 6.
    **.jeremir** -jeremir.
    **.dog** - mostra a foto de um dog aleatória.
    **.cat** - mostra a foto de um cat aleatória.
    **.j** - \`pedra, papel ou tesoura\` é jokempô '-'.
    **.dados** - joga dados e para em um numero '-'.
    **.celular** - Em manuntenção.
    **.convite** - Irá mostrar o convite do servidor para suporte e invite do bot.
    **.infoserver** - Irá mostrar as informações do servidor que o comando foi executado.
    **.userinfo** \`@usuário\` - Irá mostrar as informações do usuário mencionado.`)
                    .setThumbnail("https://media3.giphy.com/media/kGLo3FQGT7kUOiop5P/giphy.gif")
                    .setColor("#00f782")
                    .setFooter("© JEREMIR")
                
                const ajuda4 = new Discord.MessageEmbed()
                    .setTitle(`🎵 Música`)
                    .setDescription(`*Comandos de música, para fazer uma balada!* \n
    \n**.p** \`Nome da música\` - Irá tocar uma música.
    **.skip** - Irá pular a música que estiver tocando. 
    **.stop** - Irá parar a música que estiver tocando e limpar a playlist.
    **.queue** - Irá mostrar a lista de músicas que vai tocar.
    **.pause** - Irá pausar a música que estiver tocando.
    **.resume** - Irá despausar a música.`)
                    .setThumbnail("https://media4.giphy.com/media/3oEjHPbnKOC4WwNdiU/giphy.gif")
                    .setColor("#9833eb")
                    .setFooter("© JEREMIR")
                    const ajuda5 = new Discord.MessageEmbed()
                    .setTitle(`🔞 proibido`)
                    .setDescription(`*Comandos para maiores de 18 anos que so podem ser usados em uma sala NSFW* \n
    \n**.pussy** - +18. 
    **.anal** - +18. 
    **.real** - +18. 
    **.hentai** - +18. 
    **.gif** - +18. 
    **.ass** - +18. 
    **.otaku** - +18. `)
                    .setThumbnail("https://cdn140.picsart.com/291782983027201.gif?to=crop&r=256")
                    .setColor("#9833eb")
                    .setFooter("© JEREMIR")


                    message.channel.send("Enviei uma mensagem no privado com os meus comandos, olha lá :)")
                    message.author.send(ajuda1).catch(error => message.reply(`erro, seu chat privado está desativado. Ative para eu lhe mandar meus comandos.`).then(msg => msg.delete(8000)));
                    message.author.send(categoria).then(msg=> {
                        msg.react("👮").then(r => {
                            msg.react("📋")
                            msg.react("🎵")
                            msg.react("🔞")
                            
                            const mod = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id;
                            const outros = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
                            const musica = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id;
                            const proibido = (reaction, user) => reaction.emoji.name === '🔞' && user.id === message.author.id;
                
                            const modl = msg.createReactionCollector(mod, { time: 600000 });
                            const outrosl = msg.createReactionCollector(outros, { time: 600000 });
                            const musical = msg.createReactionCollector(musica, { time: 600000 });
                            const proibido1 = msg.createReactionCollector(proibido, { time: 600000 });
                
                            modl.on('collect', r=> {
                                message.author.send(ajuda2).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar a ajuda. :worried:`).then(msg => msg.delete(8000)));
                            })
                            outrosl.on('collect', r=> {
                                message.author.send(ajuda3).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar a ajuda. :worried:`).then(msg => msg.delete(8000)));
                            })
                            musical.on('collect', r=> {
                                message.author.send(ajuda4).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar a ajuda. :worried:`).then(msg => msg.delete(8000)));
                            })
                            proibido1.on('collect', r=> {
                                message.author.send(ajuda5).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar a ajuda. :worried:`).then(msg => msg.delete(8000)));
                            })
            })
        })

},
};