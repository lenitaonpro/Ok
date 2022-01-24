module.exports = {
    name: 'homo',
    description: "Kertoo että olet neekeri",
    execute(message, args){


let role = message.guild.roles.cache.find(r => r.name === "Kansalainen");

if(message.member.permissions.has("BAN_MEMBERS")){
    message.channel.send('Sinulla ei ole oikeuksia bannata jäseniä!');
} else {
    message.channel.send('Sinulla ei ole oikeuksia bannata jäseniä!');
}

        if(message.member.roles.cache.some(r => r.name === "Kansalainen")){
            message.channel.send('Päivää')

        }else {
            message.channel.send('Siinä sulle rooli :)');
            message.member.roles.add('913876756702838848').catch(console.error);

        }

       

    }
}