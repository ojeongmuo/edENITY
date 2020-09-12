const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
  console.log('켰다.');
client.user.setPresence({ game: { name: 'o!help or k!help' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '사용법') {
    return message.reply('o!help 쳐보세요');
  }



  if(message.content == 'o!값') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('복붙 하고 영웅 쳐주세용', img, )
      .addField('o!영웅', 'Tom#6666 ', true)
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
if(message.content == 'o!모이라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('모이라 트레킹', img, )
      .addField('```Name Moira```', '```Tracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751115745462714438/0de8f0d1ca764052.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

if(message.content == 'k!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('겐지 좌', img, )
      .addField('```Name Genji```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752742428729147422/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('맥크리 좌', img, )
      .addField('```Name Maccree```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752746525830021180/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }


if(message.content == 'k!맥') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('맥 좌', img, )
      .addField('```Name Mac```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752746525830021180/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('겐지 우', img, )
      .addField('```Name Genji```', '```Right```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752754823644053604/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('호그 좌', img, )
      .addField('```Name Hog```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752754329752174712/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('호그 우', img, )
      .addField('```Name Hog```', '```Right```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752754388346601492/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }


if(message.content == 'k!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('호그 그랩', img, )
      .addField('```Name Hog```', '```Shift```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752754267735195679/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!한조') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('한조 좌', img, )
      .addField('```Name Hanzo```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752744360407466024/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }


if(message.content == 'k!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/749855561889349692/752742830430093393/unknown.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('애쉬 좌', img, )
      .addField('```Name Ash```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752743167597477888/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }
if(message.content == 'k!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('위도우 좌', img, )
      .addField('```Name Widowmaker```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752743167597477888/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!위도') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('위도 좌', img, )
      .addField('```Name Widow```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/752743167597477888/unknown.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }


  
if(message.content == 'o!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('겐지 플릭', img, )
      .addField('```Name Genji```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753625358334558310/dc04ba4650c31b1a.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

if(message.content == 'o!한국어') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('UI 한국어', img, )
      .addField('```Name Korea```', '```UI Korea```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/751096436258504774/751271332959879250/7031ab3335468bcd.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('겐지 유도', img, )
      .addField('```Name Genji```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/750911290133708991/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!토르비온') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('토르비온 유도', img, )
      .addField('```Name Torbjorn```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750922731369005083/1.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }





  if(message.content == 'o!토르') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('토르 유도', img, )
      .addField('```Name Torbjorn```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750922731369005083/1.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!디바') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('디바 트래킹', img, )
      .addField('```Name Dva```', '```Tracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751029974462627912/Orion_.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  

  if(message.content == 'o!바티') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('바티 트래킹', img, )
      .addField('```Name Batist```', '```Tracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751113664806912125/1.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  


  
  
  
  
  if(message.content == 'o!리퍼') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('리퍼 플릭', img, )
      .addField('```Name Reaper```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750916385819066388/1.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  if(message.content == 'o!리퍼') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('리퍼 유도', img, )
      .addField('```Name Reaper```', '```Silent shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750916382455234640/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  




  

  if(message.content == 'o!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('둠피 플릭', img, )
      .addField('```Name Doom```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750915436043960330/1.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  if(message.content == 'o!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('둠피 유도', img, )
      .addField('```Name Doom```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750915433141501983/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  if(message.content == 'o!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('위도우 플릭', img, )
      .addField('```Name Widow```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753512703670091847/7d7ca00ad21d9d36.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  
  if(message.content == 'o!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('위도우 유도', img, )
      .addField('```Name Widow```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753624636604022894/ebfc78b1e0196891.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!위도') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('위도 플릭', img, )
      .addField('```Name Widow```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753512703670091847/7d7ca00ad21d9d36.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!위도') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('위도 유도', img, )
      .addField('```Name Widow```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753624636604022894/ebfc78b1e0196891.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!한조') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('한조 플릭', img, )
      .addField('```Name Hanzo```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750924534567403560/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


if(message.content == 'o!한조') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('한조 유도', img, )
      .addField('```Name Hanzo```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753624471021158450/847acba6ac488b1b.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  
  if(message.content == 'o!정크') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('정크 유도', img, )
      .addField('```Name Junkrat```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750922388169818142/91e4e2234fb986d6.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  


  if(message.content == 'o!정크렛') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('정크렛 유도', img, )
      .addField('```Name Junkrat```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750922388169818142/91e4e2234fb986d6.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  if(message.content == 'o!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('애쉬 플릭', img, )
      .addField('```Name Ash```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753623529022292099/2.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  

  if(message.content == 'o!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('애쉬 유도', img, )
      .addField('```Name Ash```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753623517291085864/bfaeeed5a155f8fc.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  



  if(message.content == 'o!파라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Para```', '```Flick```', true)
      .setAuthor('파라 플릭', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750923912828682362/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  



  if(message.content == 'o!파라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Para```', '```Silent Shot```', true)
      .setAuthor('파라 유도', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750923912828682362/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```Flick```', true)
      .setAuthor('호그 플릭', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031448357568552/6.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```Silent Shot```', true)
      .setAuthor('호그 유도', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031245315637351/5.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```Abilities```', true)
      .setAuthor('호그 부가기능', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751030870823141416/4.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!시그마') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Sigma```', '```Flick```', true)
      .setAuthor('시그마 플릭', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751032950979821578/3.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  
  if(message.content == 'o!시그마') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Sigma```', '```Abilities```', true)
      .setAuthor('시그마 부가기능', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751032952779046912/4.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  if(message.content == 'o!레킹볼') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name wrecking ball```', '```Tracking```', true)
      .setAuthor('레킹볼 트레킹', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751033565776707614/c85bfbe6c2e26b88.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  
  
  if(message.content == 'o!오리사') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Orisa```', '```Tracking```', true)
      .setAuthor('오리사 트레킹', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751034838672211968/1.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  
  if(message.content == 'o!윈스턴') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Winston```', '```Tracking```', true)
      .setAuthor('윈스턴 트레킹', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751034526800805988/e1cad039c208f625.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!윈스') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Winston```', '```Tracking```', true)
      .setAuthor('윈스 트레킹', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751034526800805988/e1cad039c208f625.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```Flick```', true)
      .setAuthor('로드호그 플릭', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031448357568552/6.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```Silent Shot```', true)
      .setAuthor('로드호그 유도', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031245315637351/5.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!로드호그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Roadhog```', '```Abilities```', true)
      .setAuthor('로드호그 부가기능', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751030870823141416/4.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!자리야') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Zarya```', '```Tracking```', true)
      .setColor('#ffff00')
      .setAuthor('로드호그 트레킹', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031682265514024/1.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!자리야') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Zarya```', '```Silent Shot```', true)
      .setColor('#ffff00')
      .setAuthor('자리야 유도', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031679602393118/2.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  



  if(message.content == 'o!라인') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Reinhardt```', '```Tracking```', true)
      .setColor('#ffff00')
      .setAuthor('라인 트레킹', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031832799346748/1.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  if(message.content == 'o!라인') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .addField('```Name Reinhardt```', '```Abilities```', true)
      .setColor('#ffff00')
      .setAuthor('라인 부가기능', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/751031831687594014/2.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  if(message.content == 'o!야타') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Zenyatta```', '```Flick```', true)
      .setAuthor('야타 플릭', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751109675134484520/d69b2fb30b9f6f56.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!야타') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Zenyatta```', '```Silent Shot```', true)
      .setAuthor('야타 유도', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110436212179042/2.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!젠야타') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Zenyatta```', '```Flick```', true)
      .setAuthor('젠야타 플릭', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751109675134484520/d69b2fb30b9f6f56.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!젠야타') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Zenyatta```', '```Silent Shot```', true)
      .setAuthor('젠야타 유도', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110436212179042/2.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  

  if(message.content == 'o!아나') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Ana```', '```Flick```', true)
      .setAuthor('아나 플릭', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110607159296000/cd069a19bac8b6a0.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!브리') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Brigitte```', '```Tracking```', true)
      .setAuthor('브리 트레킹', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110716420915330/bb2f285e5e278972.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!브리기테') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .addField('```Name Brigitte```', '```Tracking```', true)
      .setAuthor('브리기테 트레킹', img, )
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/750187350004596799/751110716420915330/bb2f285e5e278972.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  



  if(message.content == 'o!맥') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('맥 플릭', img, )
      .addField('```Name Mac```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753512186995015781/117c05786350e28a.png')
      .setFooter('ORION BOT❤️', img)
      message.channel.send(embed)
    }



  if(message.content == 'o!맥') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('맥 유도', img, )
      .addField('```Name Mac```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750917325011812393/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('맥크리 플릭', img, )
      .addField('```Name MacCree```', '```Flick```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/753512186995015781/117c05786350e28a.png')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('맥크리 유도', img, )
      .addField('```Name MacCree```', '```Silent Shot```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750917325011812393/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }



  

  if(message.content == 'o!트레') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('트레 트레킹', img, )
      .addField('```Name Tracer```', '```Tracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750923242835017788/18d63aca66148a0a.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }





  if(message.content == 'o!트레이서') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('트레이서 트레킹', img, )
      .addField('```Name Tracer```', '```Tracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750923242835017788/18d63aca66148a0a.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!메이') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('메이 트레킹', img, )
      .addField('```Name May```', '```Tracking```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918245615403149/2.PNG')
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


if(message.content == 'o!솔저') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('솔 트레킹', img, )
      .addField('```Name Soldier```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!솔져') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('솔져 트레킹', img, )
      .addField('```Name Soldier```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  
  if(message.content == 'o!솜브라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('솜브라 트레킹', img, )
      .addField('```Name Sombra```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750920405463859200/1.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
  
  if(message.content == 'o!시메') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('시메 트레킹', img, )
      .addField('```Name Symmetra```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750920787451445419/2.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!시메') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('시메트라 트레킹', img, )
      .addField('```Name Symmetra```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750921031908196502/3.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'o!시메트라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('시메트라 트레킹', img, )
      .addField('```Name Symmetra```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750920787451445419/2.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!시메트라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('시메트라 트레킹', img, )
      .addField('```Name Symmetra```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750921031908196502/3.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)

  }
 
 if(message.content == 'k!영웅 목록') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setTitle('Hero Name')
     .setColor('#ff0000')
      .setAuthor('영웅 이름', img, 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif')
      .setThumbnail(img)
      .addBlankField()
      .addField('```딜러 영웅 목록```', '```diff
+겐지 한조 위도우 맥```')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('Kanto BOT❤️', img)

    message.channel.send(embed)
  } 
  

  if(message.content == 'o!바스') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('바스 트레킹', img, )
      .addField('```Name Bastion```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  if(message.content == 'o!바스티온') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('바스티온 트레킹', img, )
      .addField('```Name Bastion```', '```Tracking```', true)
      .setImage('https://cdn.discordapp.com/attachments/749855561889349692/750918569646096394/1.PNG')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }
if(message.content == 'o!이스터에그') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('개발자가 숨겨놓은 이스터에그를 찾아보시오', img, )
      .addField('```이스터에그```', '```찾아보세요```', true)
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }

  
  if(message.content == 'o!esp') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('예쁜 ESP', img, )
      .addField('```ESP```', '```good Esp```', true)
      .setImage('https://cdn.discordapp.com/attachments/751809877135065120/752076619203477574/esp.png')
      .setThumbnail(img)
      .setFooter('ORION BOT❤️', img)
    message.channel.send(embed)
  }





  else if(message.content == 'k!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
        let commandList = [
       {name: 'k!(영웅이름)', desc: '입력한 영웅에 값을 불러옵니다'},
      {name: 'k!영웅 목록', desc: '꿀값 있는 영웅들을 불러옵니다'},
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Kanto BOT HELP USER', helpImg)
      .setColor('#ff0000')
      .setFooter(`Kanto BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

        else if(message.content == 'o!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/726255182484209756/749814328735170590/aasdzxc.png';
        let commandList = [
          {name: 'o!(사용할 영웅)', desc: '사용할 영웅 값을 보내줍니다'},
          {name: 'o!한국어', desc: 'UI 번역을 합니다'},
          {name: 'o!값', desc: '쉽게 복붙 할수있습니다'},
          {name: 'o!이스터에그', desc: '개발자에 이스터에그'},
          {name: 'o!ESP', desc: '예쁜 ESP를 '}, 
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('ORION BOT HELP USER', helpImg)
      .setColor('#fff000')
      .setFooter(`ORION BOT ❤️`)
      .setTimestamp()
    
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
 
