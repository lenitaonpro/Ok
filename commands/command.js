const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message) {
        const embed = new MessageEmbed()
            .setColor('#304281')
            .setTitle('DC Säännöt')
            .setDescription('LUE SÄÄNNÖT HUOLELLISESTI!')
            .addFields(
                { name: 'Sääntö 1', value: 'Ole kiltti muille' },
                { name: 'Sääntö 2', value: 'Älä lähetä haitallisia linkkejä' },
                { name: 'Sääntö 3', value: 'Ei turhaa tägäämistä' },
                { name: 'Sääntö 4', value: 'Ei K-18 Postauksia muuhun kuin NSWF-kanaville' },
                { name: 'Sääntö 5', value: 'Asiallinen käytös' },
                { name: 'Sääntö 6', value: 'Mainostus kielletty' },
                { name: 'Sääntö 7', value: 'Ei syrjintää' },
                { name: 'Sääntö 8', value: 'Ei spammimista' },
                { name: 'Sääntö 9', value: 'Ylläpidon käskyjä totellaan' },
                { name: 'Sääntö 10', value: 'Maalaisjärjen käyttö hyvin suositeltua' }
            )
        


        message.channel.send(embed)

    }
}