
const Discord = require("discord.js");
const config = require("./config.json");//procura config
const { prefix, token } = require("./config.json");
const {Client,  Util } = require('discord.js');
const fs = require("fs");
const ytdl = require("ytdl-core");
const Youtube = require('simple-youtube-api');
const youtube = new Youtube(config.GOOGLE_KEY);
const streamOptions = {seek: 0, volume:1};
let estouProntoo = false;
const bot = new Discord.Client({ partials:["MESSAGE", "CHANNEL", "REACTION"]});


const client = new Discord.Client();
client.commands = new Discord.Collection();

const queue = new Map();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  console.log(`comando ${file} carregado com sucesso.`)
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}
function changing_status() {
  let status = [`👉Eu estou em ${client.guilds.cache.size} servidores `, `👉Consigo ver ${client.channels.cache.size} canais🙄`, `👉Meu prefix é .`, `😄Use .help para lhe ajudar`]
  let random = status[Math.floor(Math.random() * status.length)]
  client.user.setActivity(random)
}
client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
}),

client.on('raw', async dados => {
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id != "993325051409612891") return
  let servidor = client.guilds.cache.get("968686507869220934")
  let membro = servidor.members.cache.get(dados.d.user_id)

  let RAITEC = servidor.roles.cache.get('''),
      PET = servidor.roles.cache.get('''),
      SOBREVIVENTES = servidor.roles.cache.get('''),
      ITA = servidor.roles.cache.get('''),
      IEEE = servidor.roles.cache.get('''),
      TEC = servidor.roles.cache.get(''')

  if(dados.t === "MESSAGE_REACTION_ADD"){

    if(dados.d.emoji.name === "🛰️"){
      if(membro.roles.cache.has(RAITEC)) return
        membro.roles.add(RAITEC)
    }else if(dados.d.emoji.name === "✈️"){
        if(membro.roles.cache.has(ITA)) return
        membro.roles.add(ITA)
    }else if(dados.d.emoji.name === "⚡"){
        if(membro.roles.cache.has(PET)) return
        membro.roles.add(PET)
    }else if(dados.d.emoji.name === "🦅"){
        if(membro.roles.cache.has(IEEE)) return
        membro.roles.add(IEEE)
    }else if(dados.d.emoji.name === "🛠️"){
        if(membro.roles.cache.has(TEC)) return
        membro.roles.add(TEC)
    }else if(dados.d.emoji.name === "🤕"){
        if(membro.roles.cache.has(SOBREVIVENTES)) return
        membro.roles.add(SOBREVIVENTES)
      }
  }
  if(dados.t === "MESSAGE_REACTION_REMOVE"){
      if(dados.d.emoji.name === "🛰️"){
          if(membro.roles.cache.has(RAITEC)) return
          membro.roles.remove(RAITEC)
      }else if(dados.d.emoji.name === "✈️"){
          if(membro.roles.cache.has(ITA)) return
          membro.roles.remove(ITA)
      }else if(dados.d.emoji.name === "⚡"){
          if(membro.roles.cache.has(PET)) return
          membro.roles.remove(PET)
      }else if(dados.d.emoji.name === "🦅"){
          if(membro.roles.cache.has(IEEE)) return
          membro.roles.remove(IEEE)
      }else if(dados.d.emoji.name === "🛠️"){
          if(membro.roles.cache.has(TEC)) return
          membro.roles.remove(TEC)
      }else if(dados.d.emoji.name === "🤕"){
          if(membro.roles.cache.has(SOBREVIVENTES)) return
          membro.roles.remove(SOBREVIVENTES)
      }
  }

})


//Welcome & goodbye messages\\
client.on('guildMemberAdd', member => {
  member.roles.add(member.guild.roles.cache.find(i => i.name === 'SOBREVIVENTES'))

  const welcomeEmbed = new Discord.MessageEmbed()

  welcomeEmbed.setColor('#5cf000')
  welcomeEmbed.setTitle('**' + member.user.username + '** is now Among Us other **' + member.guild.memberCount + '** people')
  welcomeEmbed.setImage('https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ-650-80.jpg.webp')

  member.guild.channels.cache.find(i => i.name === '🌎gεяคł').send(welcomeEmbed)
})

client.on('guildMemberRemove', member => {
  const goodbyeEmbed = new Discord.MessageEmbed()

  goodbyeEmbed.setColor('#f00000')
  goodbyeEmbed.setTitle('**' + member.user.username + '** was not the impostor there are **' + member.guild.memberCount + '** left Among Us')
  goodbyeEmbed.setImage('https://gamewith-en.akamaized.net/article/thumbnail/rectangle/22183.png')

  member.guild.channels.cache.find(i => i.name === 'chat-geral').send(goodbyeEmbed)
})
//Welcome & goodbye messages end\\















client.login(config.token);
client.on('message', message => { //whenever a message is sent
  //if(!message.member.hasPermission("ADM")) return;
 if(message.author.bot) return;
 if(message.channel.id === ''')
 {
  if(message.content.includes('discord.gg/')
  || message.content.includes('https://')
  || message.content.includes('www.')
  || message.content.includes('http://'))
  { //if it contains an invite link
    message.delete() //delete the message
      .then(message.channel.send('**Links nesse chat não são permitidos**'))
  }}
  if(message.channel.id === ''')
  {
   if(message.content.includes('discord.gg/')
   || message.content.includes('https://')
   || message.content.includes('www.')
   || message.content.includes('http://'))
   { //if it contains an invite link
     message.delete() //delete the message
       .then(message.channel.send('**Links nesse chat não são permitidos**'))
   }}
   if(message.channel.id === ''')
   {
    if(message.content.includes('discord.gg/')
    || message.content.includes('https://')
    || message.content.includes('www.')
    || message.content.includes('http://'))
    { //if it contains an invite link
      message.delete() //delete the message
        .then(message.channel.send('**Links nesse chat não são permitidos**'))
    }}

}) 

client.on("message", async message => {
 if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
 const command = args.shift().toLowerCase();
 if (command === 'args-info') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

	message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}
//  if (!client.commands.has(command)) return;


const serverQueue = queue.get(message.guild.id);
let messageArray = message.content.split(" ");



if (command === 'p') {
      try{
        var video = await youtube.getVideo(url);
    } catch (error) {
        let oQueTocar = message.content.replace(`${config.prefix}p `, '');
        try {
		let videosPesquisados = await youtube.searchVideos(oQueTocar, 1);
		// eslint-disable-next-line max-depth
        var video = await youtube.getVideoByID(videosPesquisados[0].id);
    } catch (err) {	
        console.error(err);
        message.channel.send('Nada encontrado');
    }
}	
    execute(message, serverQueue, video);
    return;
  } else if (command === 'skip') {
    skip(message, serverQueue);
    return;


  }else if (command === 'removerbot') {
    message.delete().catch(O_o=>{});
    let servidor = args[0]
    if(!servidor) return message.reply("por favor, digite o ID do servidor!")

    let guild = client.guilds.cache.find(gd => gd.id === servidor);
    if(!guild)
        return message.reply("por favor, digite um ID valido, o servidor não existe!")

    const remover = new Discord.MessageEmbed()
        .setAuthor("Remover bot!", client.user.avatarURL())
        .setDescription(`${message.author},Você realmente quer me tirar do servidor \`${guild.name}\` - \`${guild.id}\`?`)
        .setTimestamp()
        .setFooter(`© JonhBot`, message.author.avatarURL)
    
    message.channel.send(remover).then(msg=> {
        msg.react("✅").then(r => {
            msg.react("❎")
        
            const sim = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
            const nao = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

            const siml = msg.createReactionCollector(sim, { time: 60000 });
            const naol = msg.createReactionCollector(nao, { time: 60000 });

            siml.on('collect', r=> {
                msg.delete();
                message.channel.send(`:white_check_mark: **|** ${message.author}, sai do servidor \`${guild.name}\` (\`${guild.id}\`)!`)
            
                client.channels.cache.get("531170810191282208").send(`**Eu fui removido do servidor \`${guild.name}\`(\`${guild.id}\`) por ${message.author}!**`);
                guild.leave()
            })
            naol.on('collect', r=> {
                msg.delete();
                message.channel.send(`:negative_squared_cross_mark: **|** ${message.author}, você cancelou a minha remoção do servidor \`${guild.name}\` (\`${guild.id}\`)!`)
            })
        })
    })
  }
   else if (command === 'servers') {
            client.guilds.cache.forEach((guild) => {
                message.reply(`${guild.name} --- ID: ${guild.id}`)
            });
        message.channel.send('Processo finalizado ou você não é o Kjonh!!')
  }else if (command === 'stop') {
    stop(message, serverQueue);
    return;
  } else if (command === 'pause') {
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return message.channel.send('⏸ Pausou');
  }
  return message.channel.send('Não a nada tocando.');
}


else if (command === 'sigaa') {
  let embed = new  Discord.MessageEmbed()
  .setTitle('Link do SIGAA UFC :D')
  .addField(`🚀 Link SIGAA:`,"'")
  .setColor('RAMDOM')
  let msgEmbed = await message.channel.send(embed)
  msgEmbed.react('😴')
}
else if (command === 'dono') {
  let embed = new  Discord.MessageEmbed()
  .setTitle('Fui criado por Kjonh#3350')
  .addField(`🚀 '-'`)
  .setColor('RAMDOM')
  let msgEmbed = await message.channel.send(embed)
  msgEmbed.react('😴')
}

else if (command === 'resume') {
  if (serverQueue && !serverQueue.playing) {
    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    return message.channel.send('▶ Continuando...');
  }
  } else if (command === 'volume') {
    if (!message.member.voice.channel) return message.channel.send('Você não está em um canal de voz!');
		if (!serverQueue) return message.channel.send('Não está tocando.');
		if (!args[1]) return message.channel.send(`O Volume atual é: **${serverQueue.volume}** , Para alterar: Use o comando .volume set <valor 1 à 5> `);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`Ajustar volume para: **${args[1]}**`);
  } else if (command === 'queue') {
    if (!serverQueue) return message.channel.send('Não a nada tocando.');
    let queuebonito = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`**💿Lista de Músicas💿**`)
    .setDescription(`${serverQueue.songs.map(song => `**---** ${song.title}`).join('\n')}
    **▶ Tocando Agora:** ${serverQueue.songs[0].title}
            `)
    return message.reply(queuebonito);
  } else {
  }

  try {
    client.commands.get(command).execute(message, args);
} catch (error) {
    console.error(error);
    message.reply('erro no comando ou nao existe');
}
});
async function execute(message, serverQueue, video) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "Ih ala, tu nao tem permissão, trouxa"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "Eu sou uma piada pra vc? nao tenho permissão vei..."
    );
  }
  const song = {
    id: video.id,
    horas: video.duration.hours,
    minutos: video.duration.minutes,
    segundos: video.duration.seconds,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`,
    imagem: video.thumbnails.default.url
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    let MusicADD = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${song.title}** foi adicionado(a) à playlist. Use **.queue** para ver a playlist`)
    return message.channel.send(MusicADD);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "Tu precisa estar em um canal mongol"
    );
  if (!serverQueue)
    return message.channel.send("nao posso pular");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "Tu precisa estar em um canal mongol"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
  message.channel.send('Parei de tocar!')
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  const dispatcher = serverQueue.connection
  .play(ytdl(song.url))
  .on("finish", () => {
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  })
  .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  const tocando = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('** ▶️ Tocando:**')
  .setDescription(`**${song.title}**`)
  .setThumbnail(song.imagem)
  .addField(`Duração: ${song.horas} horas, ${song.minutos} minutos e ${song.segundos} segundos`, 
'💿')
  .setTimestamp()
  .setFooter('Dj Jeremir', 'https://cdn.discordapp.com/attachments/222057613477543936/787457596952281139/jeremir.png');
  serverQueue.textChannel.send(tocando);
  
}



client.on("messageReactionAdd", async (reaction, user ) => {
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();

  if(user.bot) return;
  if(!reaction.message.guild) return;

  if(reaction.message.channel.id === ("''").react("🧔")){
      if(reaction.emoji.name === ':bearded_person:'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === ':bearded_person:'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === ':bearded_person:'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === ':bearded_person:'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === ':bearded_person:'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === ':bearded_person:'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === ':bearded_person:'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === ':bearded_person:'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === '👩‍🦱'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
    else if(reaction.emoji.name === '🧔'){
      await reaction.message.guild.members.cache.get(user.id).roles.add("'")
    }
  }
})
client.login(token);