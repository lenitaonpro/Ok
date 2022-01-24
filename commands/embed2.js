const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'embed2',
    description: "Tässä admin säännöt!",
    execute(message) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sinulla ei ole oikeuksia käyttää tätä komentoa.');
        const embed2 = new MessageEmbed()
            .setColor('#304281')
            .setTitle('Admin säännöt')
            .setDescription('Tässä tärkeimmät admin säännöt!')
            .addFields( 
                { name: 'Sääntö 1', value: 'Kun vastaanotat ylläpito/valvoja roolin serverillä suostut myös sitoutumaan kaikkiin serverin ja discordin sääntöihin. Ylläpito-oikeuksien väärin käytöstä voi menettää oikeudet ja saada porttikiellon serverille ylimmän tahon harkinnan mukaan (johtoryhmä ja omistajat).' },
                { name: 'Sääntö 2', value: 'Kaikenlainen abusaaminen / oikeuksien hyväksikäyttö on kiellettyä "sisältyy rahan aseiden ja muiden tavaroiden yms ottaminen ilman hyvää syytä". ' },
                { name: 'Sääntö 3', value: 'Muiden antamia banneja ei saa mitätöidä ilman bannaajan / johtoryhmän lupaa' },
                { name: 'Sääntö 4', value: 'Vain ylimällä taholla (eli johtoryhmällä ja omistajilla) on lupa poistaa joltain ylläpito/valvoja oikeudet. Luvan kanssa voidaan tehdä poikeuksia. ' },
                { name: 'Sääntö 5', value: 'Banneja ei saa antaa henkilökohtaisista / muilta servereiltä tulleiden tapahtumien takia (sisältyy myös "rage bannit"). ' },
                { name: 'Sääntö 6', value: 'Ylläpidon kanavien tai muiden keskeisien asioiden jakamine on ehdottomasti kielletty ilman lupaa' },
                { name: 'Sääntö 7', value: 'Jos ylläpitäjä/valvoja perseilee taikka käyttäytyy huonosti on ylemmällä taholla oikeus evätä hänen admin oikeudet.' },
                { name: 'Sääntö 8', value: 'Ylemmällä taholla on oikeus soveltaa sääntöjä tarpeen vaatiessa.' },
                { name: 'Sääntö 9', value: 'Maalaisjärjen käyttö on pakollista eli, jos jotain ei lukenut täällä se ei tarkoita, että sitä saa tehdä. Epäselvässä tilanteessa kysy ylemmältä taholta.' },
                { name: 'Sääntö 10', value: 'Kunnioita sääntökä, vaikka olet admin, niin et saa tehtä sääntörikkeitä.' }

            )
    
            

        message.channel.send(embed2)

    }
}