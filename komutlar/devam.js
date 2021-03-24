module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: "#f30707", description: `<a:yanlis:734892943332212764>  | Duraklatılan bir müziği devam ettirebilmek için bir ses kanalında olmanız gerekmektedir!` }})
const sarki = await client.player.resume(message.guild.id);
if(!sarki) return message.channel.send({embed: {color: "#f30707", description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
message.channel.send({embed: {color: "#22BF41", description: `<a:tik:734892939737694239>  | \`${sarki.name}\` adlı müzik devam ettiriliyor.` }})
};

module.exports.config = {
    name: "devam",
    aliases: ["devamet", "devam-et"]
};