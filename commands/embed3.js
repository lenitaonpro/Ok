const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'embed3',
    description: "Juu bot komennot!",
    execute(message) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sinulla ei ole oikeuksia käyttää tätä komentoa.');
        const embed3 = new MessageEmbed()
            .setColor('#304281')
            .setTitle('NeutralRP Botin Komennot')
            .setDescription(':)!')
            .addFields( 
                { name: '*Komento 1*', value: '-clear poistettavien viestejen määrä : Poistaa tietyn määrän viestejä kanavalta!' },
                { name: 'Komento 2', value: '-kick jäsenen täg : Kickaa tägätyn jäsenen!' },
                { name: 'Komento 3', value: '-ban jäsenen täg : Bannaa tägätyn jäsenen' },
                { name: 'Komento 4', value: '-mute jäsenen täg : Mutettaa tägätyn jäsenen!' },
                { name: 'Komento 5', value: '-unmute jäsenen täg : Unmutettaa tägätyn jäsenen!' },
                { name: 'Komento 6', value: '-mute jäsenen täg ja siihe perää jos haluu nii voi laittaa ajan esim. 10s tai 10m tai 10h yms yms!' },
                { name: 'Komento 7', value: '-play Ja laulun nimi/URL - Osoite : Soittaa kyseisen laulun!' },
                {name: 'Komento 8', value: '-leave : Disconnectaa botin puhekanavalta ja lopettaa musiikin soittamisen!' }

            )



        message.channel.send(embed3)

    }
}