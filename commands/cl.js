module.exports = {
    name: 'cl',
    description: "Poistaa viestejä!",
    Permissions: ["ADMINISTRATOR","MANAGE_MESSAGES"],
   async execute(message, args) {
    if(message.member.roles.cache.has('919930077783916564')){
        if (!args[0]) return message.reply("Lisää poistettavien viestien määrä kiitos!");
 
        if(isNaN(args[0])) return message.reply("Lisää poistettavien viestejen määrä kiitos!");
 
        if(args[0] > 100) return message.reply("Voit poistaa enintään 100 viestiä kerralla!");
        
        if(args[0] < 1) return message.reply("Sinun pitää poistaa vähintään 1 viesti!");

await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
       }else {
        message.channel.send('Sinulla ei ole oikeuksia tähän!');
       }
 
        

 }
 }