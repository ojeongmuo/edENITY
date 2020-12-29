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
    return message.reply('o!help 쳐보세요');
  }

if(message.content == 's!genji') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Genji```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/786380149758099456/b55974bb1b1e0f8b.PNG')
    

    message.channel.send(embed)
  }
 

 if(message.content == 's!Torbjorn') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Torbjorn```', '```fix\nSilent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756307222031630466/f8a6e0a2266eeeff.PNG')

    message.channel.send(embed)
  }



  
  

 
  
if(message.content == 's!Reaper') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Reaper```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/786381042961219584/4c7f0688b45d92b1.PNG')

    message.channel.send(embed)
  }



  
  
 if(message.content == 's!Widowmaker') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/792630294821470218/56ab50eba7301a00.png')

    message.channel.send(embed)
  }

  
  
 if(message.content == 's!Widow') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Widow```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/792630294821470218/56ab50eba7301a00.png')
  
    message.channel.send(embed)
  }



 if(message.content == 's!Hanzo') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
    
      .addField('```Name Hanzo```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/791825740562825246/ece9253ec32a641c.png')

    message.channel.send(embed)
  }

 
  

if(message.content == 's!Ash') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')

      .addField('```Name Ash```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/791826248921907280/6427fe3a28212b11.png')

    message.channel.send(embed)
  }
  

  

  
  if(message.content == 's!Para') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Para```', '```fix\nFlick```', true)

      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756401748058439710/ee7c7ecc7b4f85e3.PNG')

    message.channel.send(embed)
  }
  



 
  if(message.content == 's!Mcree') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name MacCree```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/792629112518082601/876d9f0262488e6d.png')
    message.channel.send(embed)
  }



 if(message.content == 's!echo') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Echo```', '```fix\nFlick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/792630116466688080/2f98a42fe7ebf519.png')
    message.channel.send(embed)
  }


if(message.content == 's!Tracer') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Tracer```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/761869923743825921/791825633817919488/548f8801d82a49c8.png')
    message.channel.send(embed)
  }


  if(message.content == 'o!Mei') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name May```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756207375559557150/f22c693aaa50146d.PNG')
    message.channel.send(embed)
  }

  if(message.content == 's!mei') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name May```', '```fix\nTracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756207375559557150/f22c693aaa50146d.PNG')
    message.channel.send(embed)
  }

if(message.content == 'o!Soldier') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/792261584994828318/08516c344d531e3a.png')
      .setThumbnail(img)
    message.channel.send(embed)
  }
if(message.content == 's!Soldier76') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/792261584994828318/08516c344d531e3a.png')
      .setThumbnail(img)
    message.channel.send(embed)
  }

if(message.content == 's!soldier') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Soldier```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/792261584994828318/08516c344d531e3a.png')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  
  if(message.content == 's!Sombra') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Sombra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/761870125883326474/792629660109373470/16ba94947b0e619c.png')
      .setThumbnail(img)
    message.channel.send(embed)
  }
 
if(message.content == 's!symmetra') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Symmetra```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/756401926375079958/b2453cf4a8db284d.PNG')
      .setThumbnail(img)
    message.channel.send(embed)
  }

  if(message.content == 's!Bastion') {
    let img = 'https://cdn.discordapp.com/attachments/755582268684107837/757756122412220536/or.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#000000')
      .addField('```Name Bastion```', '```fix\nTracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)

    message.channel.send(embed)
  }

 



        else if(message.content == 's!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
        let commandList = [
          {name: 's!(Hero name)', desc: 'Hero Swan settings '},
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('ORION BOT HELP USER', helpImg)
      .setColor('#fff000')


      .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/748535337244033095/748955743461441640/UndetectedSawN.png')

    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지오리온')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
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
 
