const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["ADMINISTRATOR","MUTE_MEMBERS"],
    description: "This mutes a member",
    
    execute(message, args) {
        if(!message.member.permissions.has("MUTE_MEMBERS")) return
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Isoingei');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> Käyttäjä on mutettu onnistuneesti!`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> On mutettu ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Tätä käyttäjää ei löytynyt!');
        }
    }
}