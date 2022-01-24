module.exports = {
    name: 'purge',
    description: "Clear messages!",
   async execute(message, args) {
    if(message.author.id !== '614493910500376597') return message.channel.send('Kuka vittu sää oot?');

        if (!args[0]) return message.reply("Lisää poistettavien viestien määrä kiitos!");
 
        if(isNaN(args[0])) return message.reply("Lisää poistettavien viestejen määrä kiitos!");
 
        if(args[0] > 100) return message.reply("Voit poistaa enintään 100 viestiä kerralla!");
        
        if(args[0] < 1) return message.reply("Sinun pitää poistaa vähintään 1 viesti!");

await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
       
 
        

 }
 }

