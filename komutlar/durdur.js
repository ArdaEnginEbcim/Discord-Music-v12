module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: "#f30707", description: `<a:yanlis:734892943332212764>  | Oynatılan bir müziği durdurabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: "#f30707", description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
client.player.stop(message.guild.id);
message.channel.send({embed: {color: "#22BF41", description: `<a:tik:734892939737694239>  | Müzik durduruldu. Meska Music ses kanalından ayrılıyor!!` }})
};

module.exports.config = {
    name: "durdur",
    aliases: ["dur"]
};
