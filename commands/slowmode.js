const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    description: 'Sets SlowMode for a Channel',
async execute(message, args){
    if (!message.member.hasPermission("BAN_MEMBERS")){
        messages.channel.send(new Discord.MessageEmbed() .setDescription('Sinulla ei ole oikeuksia käyttää tätä komentoa :Thumbsup') .setColor('RED'))
        return;
    }

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed() .setDescription('Kirjoitathan, että kuinka pitkäksi etanatila laitetaan') .setColor('RED'));
    if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed() .setDescription('Kirjoita oikea numero kiitos!') .setColor('RED'));
    if (args[0] > 21600 || args[0] < 1) return message.channel.send(new Discord.MessageEmbed() .setDescription('Numeron pitää olla 1 - 21600') .setColor('RED'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        message.channel.send(new Discord.MessageEmbed() .setDescription(`Etanatila on nyt ${args[0]}s`) .setColor('RED'))
        return;

    message.channel.send(new Discord.MessageEmbed() .setDescription(`Etanatila on nyt  =  ${args[0]}s`) .setColor('RED'))

    .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
    })
}
}