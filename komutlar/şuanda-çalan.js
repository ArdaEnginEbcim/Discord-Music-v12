const Discord = require("discord.js")

module.exports.run = async (client, message) => {
    const calan = await client.player.nowPlaying(message.guild.id);
    const calanembed = new Discord.MessageEmbed()
        .setImage(`https://i.ytimg.com/vi/${calan.id}/default.jpg?width=1920&height=1080`)
        .setColor("#22BF41")
        .setDescription(`<a:calan:735111831550427166>  | Şu Anda Çalınan Müzik:\n\`${calan.name}\``)
    if (!message.member.voice.channel) return message.channel.send({ embed: { color: "#f30707", description: `<a:yanlis:734892943332212764>  | Şu anda oynatılan bir müziği görebilmek için bir ses kanalında olmanız gerekmektedir!` } })
    if (!client.player.isPlaying(message.guild.id)) return message.channel.send({ embed: { color: "#f30707", description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` } })
    message.channel.send(calanembed)
};

module.exports.config = {
    name: "çalan",
    aliases: []
};
