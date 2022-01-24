const { execute } = require("./homo");

module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: "This command kicks a member!",
    execute(message, args){
        if(!message.member.permissions.has("KICK_MEMBERS")) return
        const member = message.mentions.users.first();
        if(member){
             const memberTarger = message.guild.members.cache.get(member.id);
             memberTarger.kick();
             message.channel.send("Käyttäjä on kickattu!");
        }else{
            message.channel.send('Tätä käyttäjää ei löytynyt!');
        }

    }
}