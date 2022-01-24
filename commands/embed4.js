const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'embed4',
    description: "Ajoneuvon osto pohja!",
    execute(message) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sinulla ei ole oikeuksia käyttää tätä komentoa.');
        const embed4 = new MessageEmbed()
            .setColor('#304281')
            .setTitle('Ajoneuvon osto pohja!')
            .setDescription('Osto')
            .addFields(
                {name: 'päivää', value: 'päivät'},
                {name: 'Lisätietoja:', value: '*Yhteydenotot:*'}

            )



        message.channel.send(embed4)

    }
}