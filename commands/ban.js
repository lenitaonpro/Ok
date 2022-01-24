const { execute } = require("./homo");

module.exports = {
    name: 'ban',
    permissions: ["ADMINISTRATOR","BAN_MEMBERS"],
    description: "This command kicks a member!",
    execute(message, args){
        if(!message.member.permissions.has("BAN_MEMBERS")) return
        const member = message.mentions.users.first();
        if(member){
             const memberTarger = message.guild.members.cache.get(member.id);
             memberTarger.ban();
             message.channel.send("Käyttäjä on bannattu!");
        }else{
            message.channel.send('Sinä et voi bannata tätä jäsentä');
        }

    }
}