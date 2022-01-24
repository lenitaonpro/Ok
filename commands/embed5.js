const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'embed5',
    description: "Asionhuora",
    execute(message) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sinulla ei ole oikeuksia käyttää tätä komentoa.');
        const embed5 = new MessageEmbed()
            .setColor('#304281')
            .setTitle('Huoraasi')
            .setDescription('Asi')
            .addFields(
                {name: 'Asionneekeri', value: '@everyone'}
            )



        message.channel.send(embed5)

    }
}