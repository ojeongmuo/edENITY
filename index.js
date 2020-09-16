const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
  console.log('켰다.');
client.user.setPresence({ game: { name: 'ch!help ' }, status: 'online' })
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


if(message.content == 'k!메이') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('메이 좌', img, )
      .addField('```Name Mei```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754356883992739870/3.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!메이') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('메이 우', img, )
      .addField('```Name Mei```', '```Right```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754357131293229159/4.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }
if(message.content == 'k!바스') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('바스 좌', img, )
      .addField('```Name Bas```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754357573477728372/c4976c2b6c313225.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!바스티온') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('바스티온 좌', img, )
      .addField('```Name Bastion```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754357573477728372/c4976c2b6c313225.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!솜브라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('솜브라 좌', img, )
      .addField('```Name Soombla```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754359755392286792/a3deb3967774877f.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!정크') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
    .setAuthor('정크 좌', img, )
      .addField('```Name J```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754361383801585664/aca005e40dd9629e.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!트레') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
    .setAuthor('트레 좌', img, )
      .addField('```Name T```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754361609555673128/77514da1d6941508.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!트레') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
    .setAuthor('트레 궁', img, )
      .addField('```Name T```', '```Q```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754361940213498006/5.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!파라') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
    .setAuthor('파라 좌', img, )
      .addField('```Name P```', '```Lift```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754362058161651752/aced5afc4cecd45c.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }


if(message.content == 'k!시메') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
    .setAuthor('시메 좌', img, )
      .addField('```Name S```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754360879679668364/2.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!시메') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
    .setAuthor('시메 우', img, )
      .addField('```Name S```', '```Right```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754361027788800010/1c013e4eb8343b2b.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }


if(message.content == 'k!에코') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
    .setAuthor('에코 좌', img, )
      .addField('```Name Eco```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754361098630856844/f1955e849fb05edb.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!에코') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
    .setAuthor('에코 우', img, )
      .addField('```Name Eco```', '```Right```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754361322656759838/f2bde683164ae0dd.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!솔저') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('솔저 좌', img, )
      .addField('```Name Soldier```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754358216229519501/4b3dd8c5191ac219.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!솔저') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('솔저 우', img, )
      .addField('```Name Soldier```', '```Right```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754358776269766797/13e9f6a70a8da89d.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!리퍼') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('리퍼 좌', img, )
      .addField('```Name Reaper ```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754356294739034112/047c66e2f4cdabe9.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('둠피 좌', img, )
      .addField('```Name Doom```', '```Left```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754356072466350180/1704e880ebe0d7de.PNG')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'k!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('둠피 우', img, )
      .addField('```Name Doom```', '```Right```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754355841133707314/4cc75cdf363e385e.PNG')
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
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
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
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754979594506862652/2.png')
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
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754979594506862652/2.png')
      .setFooter('Kanto key = 현재패치중', img)
    message.channel.send(embed)
  }

if(message.content == 'ch!자리야') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setAuthor('**```fix\n스무스 자리야```**',)
      .addField('```Name 자리야```', '```Good```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755758893619216515/c89ddb9bde2df3b0.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!디바') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setAuthor('스무스 디바',)
      .addField('```Name Dvi```', '```Good```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745822981854462007/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!에코') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setAuthor('```스무스 에코```',)
      .addField('```Name Eco```', '```Good```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823795784188064/unknown.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ch!시메') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setAuthor('스무스 ',)
      .addField('```Name 시메```', '```Good```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!정크렛') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setAuthor('스무스 정크렛',)
      .addField('```Name 정크렛```', '```Good```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!젠야타') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setAuthor('스무스 젠야타',)
      .addField('```Name Dvi```', '```Good```', true)
  .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823407073001562/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!맥크리') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 맥',)
      .addField('```Name 맥```', '```.```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742365462847029248/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!호그') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 호그',)
      .addField('```Name Hog```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755809671960461432/26a92fe290b3e62a.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!맥') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 맥',)
      .addField('```Name 맥```', '```.```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742365462847029248/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!위도우') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 위도우',)
      .addField('```Name Widow```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742366145100644352/unknown.png')
      
    message.channel.send(embed)
  }
  
  if(message.content == 'ch!정크') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 정크',)
      .addField('```Name 정크```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!바티') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 바티',)
      .addField('```Name Baptiste```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825343855656970/unknown.png')
     
    message.channel.send(embed)
  }
if(message.content == 'ch!메이') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 메이',)
      .addField('```Name Mei```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823246259060787/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!루시우') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 루시우',)
      .addField('```Name 루시우```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823311128297552/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!둠피') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 둠피',)
      .addField('```Name Doom```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/721231852039569448/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!바티스트') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 바티스트',)
      .addField('```Name Baptiste```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745823246259060787/unknown.png')
     
    message.channel.send(embed)
  }

if(message.content == 'ch!위도') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 위도' )
      .addField('```Name Widow```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742366145100644352/unknown.png')
    message.channel.send(embed)
  }

if(message.content == 'ch!파라') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 파라' )
      .addField('```Name Widow```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825449703112774/unknown.png')
    message.channel.send(embed)
  }
if(message.content == 'ch!솔저') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 솔저' )
      .addField('```Name 솔저```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825660861415484/unknown.png')
    message.channel.send(embed)
  }

if(message.content == 'ch!솜브라') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 솜브라' )
      .addField('```Name 솜브라```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825791354339418/unknown.png')
    message.channel.send(embed)
  }

  if(message.content == 'ch!토르') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 토르' )
      .addField('```Name 토르```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745825939694419998/unknown.png')
    message.channel.send(embed)
  }

if(message.content == 'ch!애쉬') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 애쉬' )
      .addField('```Name Ash```', '```.```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742366427675230309/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!한조') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 한조',)
      .addField('```Name Hanzo```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742369648493985902/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!트레') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 트레',)
      .addField('```Name Tr```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742368716490145823/unknown.png')
      
    message.channel.send(embed)
  }
if(message.content == 'ch!디바') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 디바',)
      .addField('```Name ```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/681471048688074827/745822981854462007/unknown.png')
      
    message.channel.send(embed)
  }
  

if(message.content == 'ch!트레이서') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 트레이서')
      .addField('```Name Tr```', '```good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742368716490145823/unknown.png')
      
    message.channel.send(embed)
  }

if(message.content == 'ch!겐지') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 겐지')
      .addField('```Name Genji```', '```Good```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/680260392697724943/742366610936823818/unknown.png')
      
    message.channel.send(embed)
  }



if(message.content == 'ch!아나') {
    let img = 'https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ff0000')
      .setAuthor('스무스 아나')
      .addField('```Name Ana```', '```.```', true)
      .setThumbnail(img)
      .setImage('https://cdn.discordapp.com/attachments/755758873335300320/755761228940443668/d2e4f82f3771cebb.png')
     
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
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754982926650966036/6076175114a9e28b.png')
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
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754983363978199061/5b809761145bb018.png')
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
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754985831717928990/c9dbedd1138c0029.png')
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
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754985831717928990/c9dbedd1138c0029.png')
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
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754983520908345414/bae9099e3ffd40a0.png')
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
      .setAuthor('자리야 트레킹', img, )
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


 if(message.content == 'k!보조키') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
      .setURL('http://www.naver.com')
      .setColor('#ffff00')
      .setAuthor('보조키 번역', img, )
      .addField('```Mouse Button```', '```Translation```', true)
      .setImage('https://cdn.discordapp.com/attachments/749845287400636518/754364790587129946/DPI.png')
      .setThumbnail(img)
      .setFooter('Kanto BOT❤️', img)
    message.channel.send(embed)
  }


  if(message.content == 'k!영웅 목록') {
    let img = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
    let embed = new Discord.RichEmbed()
.setColor('#ff0000')
.addField('```영웅 목록```', '``Helo List``')
      .setAuthor('꿀값 영웅 목록', img, 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif')
      .setThumbnail(img)
      .addBlankField()

      .addField('```탱커 대기중```', '```탱커 값 대기중```', true)
      .addField('```딜러```', '```모든 딜러 꿀값 완료```')
      .addField('```힐러 대기중```', '```힐러 값 대기중```', true)
      

    message.channel.send(embed)
  }

else if(message.content == 'ch!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/avatars/677970556473311284/a_fb1ded4a17c483fd50262a0531e05b9b.gif?size=512';
        let commandList = [
       {name: 'ch!(영웅이름)', desc: '입력한 영웅에 값을 불러옵니다'},
      {name: 'ch!영웅 목록', desc: '꿀값 있는 영웅들을 불러옵니다'},
        ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('CH BOT HELP USER', helpImg)
      .setColor('#ff0000')
      .setTimestamp()

    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

if(message.content == 'ch!영웅 목록') {
    let img = 'https://cdn.discordapp.com/avatars/677970556473311284/a_fb1ded4a17c483fd50262a0531e05b9b.gif?size=512';
    let embed = new Discord.RichEmbed()
.setColor('#ff0000')
.addField('```영웅 목록```', '``Helo List``')
      .setAuthor('꿀값 영웅 목록', img, 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif')
      .setThumbnail(img)
      .addBlankField()

      .addField('```탱커 대기중```', '```자리야,호그```', true)
      .addField('```딜러```', '**```fix\n겐지,위도우,애쉬,맥크리,둠대장,포탑,시메,솔저,에코,정크렛,파라,해킹```**')
      .addField('```힐러 대기중```', '```아나,바티,루시우,젠야타```', true)
     

    message.channel.send(embed)
  }


  else if(message.content == 'k!help') 
       {
        let helpImg = 'https://cdn.discordapp.com/attachments/726255182484209756/733620919565549619/4a8ffeacdbf6488d.gif';
        let commandList = [
       {name: 'k!(영웅이름)', desc: '입력한 영웅에 값을 불러옵니다'},
      {name: 'k!영웅 목록', desc: '꿀값 있는 영웅들을 불러옵니다'},
{name: 'k!보조키', desc: '보조키 사진을 '},
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
 
