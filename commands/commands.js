const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'commands',
    description: "Asionhuora",
    execute(message) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sinulla ei ole oikeuksia käyttää tätä komentoa.');
        const commands = new MessageEmbed()
            .setColor('#DC143C')
            .setTitle('Botin Komennot:')
            .setDescription('-Ban = Bannaa tägätyn henkilön \n -Kick = Kickaa tägätyn henkilön \n -Clear = Poistaa tietyn määrän viestejä \n -Play = Soittaa nimetyn laulun \n -Mute = Mutettaa tägätyn henkilön \n -Unmute = Unmutettaa tägätyn henkilön \n -Ticket = Avaa tiketin \n -Reload = Käynnistää nimetyn komennon uudestaan (Vain botin omistajalle) \n -Purge = Poistaa tietyn määrän viestejä')
            .addFields(
            )



        message.channel.send(commands)

    }
}