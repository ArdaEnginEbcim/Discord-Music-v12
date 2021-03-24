const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const Meska = require("./ayarlar/bot.json"); 
const { Player } = require("discord-player"); 

//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\


const emmmmbed = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png`)
.addField(`Meska Music - Teşekkürler`, `Selamlar, ben Bay Ördekcik(Meska Music Geliştiricisi) öncelikle botumuzu eklediğiniz ve bana destek olduğunuz için sizlere teşekkürl
erimi sunarım`)
.addField(`Meska - Prefix(Ön Ek)`, `Meska Music botun prefixi(ön eki) = \`+\`(ünlem işareti)'dir.`)
.addField(`Meska Music - Nasıl Kullanılır?`, `Meska Music botun tüm özelliklerinden yararlanabilmek için sadece \`+yardım\` yazmanız gerekmektedir.`)
.addField(`Meska Music - Linkler`, `Destek Sunucumuz:\nhttps://discord.gg/GJWcVvZgbm`)
.setFooter(`Meska Music © 2020`)
.setTimestamp()
.setImage(`https://i.pinimg.com/originals/a7/2e/dd/a72eddb090f20f7f8dd535c8390c2fba.gif`);

client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(emmmmbed)

});

//----------------------------------------------------------------\\

const player = new Player(client, Meska.youtube_api);
client.player = player;

//-------------7/24 Komutu ---------------\\


const http = require("http");
app.get("/", (request, response) => {
console.log(`${Meska.pingmesaj}`);
response.sendStatus(200);
});
app.listen(2732);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 1000 * 60 * 30);

//----------------------------------------------\\

client.on("message", async message => {
const prefix = Meska.prefix;
const messageArray = message.content.split(" ");
const cmd = messageArray[0].toLowerCase();
const args = messageArray.slice(1);
if (!message.content.startsWith(prefix)) return;
const commandfile =
client.commands.get(cmd.slice(prefix.length)) ||
client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
if (commandfile) commandfile.run(client, message, args);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
const jsfiles = files.filter(f => f.split(".").pop() === "js");
if (jsfiles.length <= 0) {
return console.log("Herhangi bir komut bulunamadı!");
}
jsfiles.forEach(file => {
console.log(`Yüklenen Komut: ${file}`);
const command = require(`./komutlar/${file}`);
client.commands.set(command.config.name, command);
command.config.aliases.forEach(alias => {
client.aliases.set(alias, command.config.name);
});
});
});

//-------------Kendini Sağirlaştirma Komutu ---------------\\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});
//---------------------------------------------------------\\

client.on("ready", ready => { 
client.user.setActivity(`Meska Music | ` + client.guilds.cache.size + ` Sunucu | ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcı`, { type: 'LISTENING' });
});
client.login(Meska.Meskatoken)
.then(function() {
console.log('[Meska] Token doğru. Bot aktif ediliyor.')
}, function(err) {
console.log("[Hata] Tokeniniz yanlış. Bot başlatılamıyor." + err)
setInterval(function() {
process.exit(0)
}, 20000);
})