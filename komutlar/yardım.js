const Discord = require("discord.js")
const Meska = require("../ayarlar/bot.json");
 
module.exports.run = (client, message, args) => { 
let pages = [
`**Meska Music kullanıcıları bilginize;**\n\n<a:ucankalpler:735102535974780968>  Yardım menüsünü görmeden önce Meska Music'i kullandığınız için sizlere teşekkür ederiz.\n\n<a:kalp:734885134251327540>  Umarım botumuzu beğenerek kullanıyorsunuzdur.\n\n<a:coder:734885134800519288>  Sizler sayesinde botumuz daha iyi yerlere geliyor.\n\n<:developer:734885133684965428>  Eksiklerimiz veya hatalarımızı ` + `\`${Meska.prefix}tavsiye\`` + ` komutu ile bizimle paylaşabilirsiniz.`,
"**Meska Music kullanıcılarının gizliliği;**\n\n<:guvenlik:735597569597767840>  Biz Meska Music geliştiricileri olarak sizin gizliliğinizi önemsiyor ve saygı duyuyoruz. Bu sebepten ötürü internet sayfamızda **Gizlilik** adlı bir konu açtık.\n\n**`Detaylı Bilgi:`**\n<a:secenek:733987076718198864> https://Meskamusic.tk/gizlilik",          
`**Meska Music kullanıcı komutları**\n\n` + `\`${Meska.prefix}yardım\`` + `\n<a:secenek:733987076718198864>  Bütün komutları ve açıklamaları gösterir. \n\n` + `\`${Meska.prefix}oynat <Şarkı İsmi>\`` +`\n<a:secenek:733987076718198864>  Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n` + `\`${Meska.prefix}durdur\`` +`\n<a:secenek:733987076718198864>  Meska Music müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n ` + `\`${Meska.prefix}atla\`` + `\n<a:secenek:733987076718198864>  Oynatılmakta olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n ` + `\`${Meska.prefix}duraklat\`` +` \n<a:secenek:733987076718198864>  Oynatılan olan müziği duraklatır. \n\n ` + `\`${Meska.prefix}devam\`` +`\n<a:secenek:733987076718198864>  Duraklatılan müziği devam ettirir.`,
`**Meska Music kullanıcı komutları**\n\n` + `\`${Meska.prefix}karıştır\`` +`\n<a:secenek:733987076718198864>  Müzik kuyruğundaki müzikleri karıştırır. \n\n ` + `\`${Meska.prefix}döngü\`` +`\n<a:secenek:733987076718198864>  Müzik kuyruğundaki müzikleri döngü içerisine alır. \n\n ` + `\`${Meska.prefix}çalan\`` +`\n<a:secenek:733987076718198864>  Oynatılan olan müziği gösterir.\n\n  ` + `\`${Meska.prefix}kuyruk\`` +`\n<a:secenek:733987076718198864>  Müzik kuyruğunu gösterir. \n\n ` + `\`${Meska.prefix}kuyruğu-temizle\`` +`\n<a:secenek:733987076718198864>  Müzik kuyruğunu temizler.\n\n ` + `\`${Meska.prefix}ses <1/100>\`` +`\n<a:secenek:733987076718198864>  Oynatılan müziğin ses seviyesini ayarlar.`
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png')
.setAuthor(`Meska Music Yardım Menüsü`, client.user.avatarURL)
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
module.exports.config = {
name: 'yardım',
aliases: ["help", "y", "h"]
};
 
