module.exports = {
    name: 'unmute',
    description: "Tämä komento unmutettaa henkilön!",
    permissions: ["MUTE_MEMBERS"],
    execute(message, args) {
        if (!message.member.permissions.has("MUTE_MEMBERS")) return

        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Isoingei');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Käyttäjä on unmutettu onnistuneesti!`);
        } else {
            message.channel.send('Tätä käyttäjää ei löytynyt!');
        }
    }
}