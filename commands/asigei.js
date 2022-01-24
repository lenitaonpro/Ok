const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'asigei',
    description: "Asi on neekeri (En ole rasisti vaan roturealisti)",
    execute (message) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sinulla ei ole oikeuksia käyttää tätä komentoa.');
        const asigei = new MessageEmbed()
            .setColor('#304281')
            .setTitle('Otei')
            .setDescription('Asi on neekeri (En ole rasisti vaan roturealisti) \n Asilla on tosi pieni pibels \n Asi on homosetsuaali \n Asi on tyhmä \n @everyone.')
            .addFields(
            )



        message.channel.send(asigei)

    }
}