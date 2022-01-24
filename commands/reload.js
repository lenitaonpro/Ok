module.exports = {
    name: 'reload',
    aliases: [],
    cooldown: 0,
    usage: `reload <category> <command>`,
    description: 'Reloads a command',
    execute: async (client, message, args, user, text, prefix) => {
        if(message.author.id !== '614493910500376597') return message.channel.send('Kuka vittu sää oot?');
        if(!args[0]) return message.channel.send('Kirjoitathan luokan, jossa komento on!');
        if(!args[1]) return message.channel.send('Kirjoitathan uudelleen käynnistettävän komennon nimen!!');

        let category = args[0];
        let command = args[1].toLowerCase();
        try {
            delete require.cache[require.resolve(`../../mantsalarp/${category}/${command}.js`)]
            client.commands.delete(command);
            const pull = require(`../../mantsalarp/${category}/${command}.js`);
            client.commands.set(command, pull);

            return message.channel.send(`**${command}** On käynnistetty uudestaan!`);
        } catch (error) {
            return message.channel.send(`Tapahtui virhe **${command}**: \`${error.message}\``);
        }
    }
}