const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
  console.log('켰다.');
client.user.setPresence({ game: { name: 's!help' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '사용법') {
    return message.reply('s!help 쳐보세요');
  }

if(message.content == 's!genji') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Genji```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794574001129127976/Genji1.png')
    

    message.channel.send(embed)
  }
 if(message.content == 's!Genji') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Genji```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794574001129127976/Genji1.png')
    

    message.channel.send(embed)
  }

 if(message.content == 's!Torbjorn') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Torbjorn```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793485247701319690/63fd11c7ed757cd3.png')

    message.channel.send(embed)
  }



   if(message.content == 's!torbjorn') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Torbjorn```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793485247701319690/63fd11c7ed757cd3.png')

    message.channel.send(embed)
  }
  

 
  
if(message.content == 's!Reaper') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')

      .addField('```Name Reaper```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793485396612481044/719a0df096993628.png')

    message.channel.send(embed)
  }

if(message.content == 's!Reaper') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')

      .addField('```Name Reaper```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793485396612481044/719a0df096993628.png')

    message.channel.send(embed)
  }

  
  
 if(message.content == 's!Widowmaker') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794588146473107506/WIDOWMAKER1.png')

    message.channel.send(embed)
  }

   if(message.content == 's!widowmaker') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794588146473107506/WIDOWMAKER1.png')

    message.channel.send(embed)
  }
  
 if(message.content == 's!Widow') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794588146473107506/WIDOWMAKER1.png')
  
    message.channel.send(embed)
  }

 if(message.content == 's!widow') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794588146473107506/WIDOWMAKER1.png')
  
    message.channel.send(embed)
  }

 if(message.content == 's!Hanzo') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
    
      .addField('```Name Hanzo```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793485568129368134/dd73b774a3625fbb.png')

    message.channel.send(embed)
  }

 
   if(message.content == 's!hanzo') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
    
      .addField('```Name Hanzo```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793485568129368134/dd73b774a3625fbb.png')

    message.channel.send(embed)
  }


if(message.content == 's!Ashe') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')

      .addField('```Name Ash```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794585347031171082/ashe1.png')

    message.channel.send(embed)
  }
  

  if(message.content == 's!ashe') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')

      .addField('```Name Ash```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794585347031171082/ashe1.png')

    message.channel.send(embed)
  }
  

  
  if(message.content == 's!Pharah') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Para```', '```fix\nFlick```', true)

      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793485853287907336/be14edde7a79e042.png')

    message.channel.send(embed)
  }
  

  if(message.content == 's!pharah') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Para```', '```fix\nFlick```', true)

      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793485853287907336/be14edde7a79e042.png')

    message.channel.send(embed)
  }

 
  if(message.content == 's!Mccree') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name MacCree```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794581397511602227/Mccree1.png')
    message.channel.send(embed)
  }

 if(message.content == 's!mccree') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name MacCree```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/793488706841346092/794581397511602227/Mccree1.png')
    message.channel.send(embed)
  }

 if(message.content == 's!echo') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Echo```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486064534421535/4558b0d5293d6fd6.png')
    message.channel.send(embed)
  }
 if(message.content == 's!Echo') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Echo```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486064534421535/4558b0d5293d6fd6.png')
    message.channel.send(embed)
  }


if(message.content == 's!Tracer') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Tracer```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486180137435206/1294193ec1c2ba1d.png')
    message.channel.send(embed)
  }
if(message.content == 's!tracer') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Tracer```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486180137435206/1294193ec1c2ba1d.png')
    message.channel.send(embed)
  }






if(message.content == 's!Soldier76') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.giff';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486296328568842/e5718a97307cb22c.png')
      .setThumbnail(img)
    message.channel.send(embed)
  }

if(message.content == 's!soldier') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486296328568842/e5718a97307cb22c.png')
      .setThumbnail(img)
    message.channel.send(embed)
  }
if(message.content == 's!Soldier') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486296328568842/e5718a97307cb22c.png')
      .setThumbnail(img)
    message.channel.send(embed)
  }
  


  if(message.content == 's!Bastion') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Bastion```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486536946876486/e87db7f286511d97.png')
      .setThumbnail(img)

    message.channel.send(embed)
  }

   if(message.content == 's!bastion') {
    let img = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#fff000')
      .addField('```Name Bastion```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/793486536946876486/e87db7f286511d97.png')
      .setThumbnail(img)

    message.channel.send(embed)
  }



        else if(message.content == 's!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/761869923743825921/793486973448617994/logo.gif';
        let commandList = [
          {name: 's!(Hero name)', desc: 'Hero Swan settings '},
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('SWAN BOT HELP USER', helpImg)
      .setColor('#fff000')


      .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/748535337244033095/748955743461441640/UndetectedSawN.png')

    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지ss')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지ss'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);
 
