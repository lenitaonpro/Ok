
const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/');
for (const file of commandFiles) {
    if (file.endsWith('.js')) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
        console.log(`Komento ladattu: ${command.name}`);
    } else {
        const subFolderFiles = fs.readdirSync(`./commands/${file}/`).filter(file => file.endsWith('.js'));
        for (const subFile of subFolderFiles) {
            const command = require(`./commands/${file}/${subFile}`);
            client.commands.set(command.name, command);
            console.log(`Komento ladattu: ${command.name}`);
        }
    }
}






const prefix = '-';

client.once('ready', () => {
    console.log('Samppibotti On Päällä!');
});

client.on('message', message => {

    process.on('uncaughtException', (err, source) => {
        console.log(`${err.stack}`);
    });

    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();




    if (command === 'command') {
        client.commands.get('command').execute(message, args,);
    }
    else if (command === 'purge') {
        client.commands.get('purge').execute(message, args);

    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);

    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);

    }
    else if (command === 'ticket') {
        client.commands.get('ticket').execute(message, args);

    }

    else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);

    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);

    }

    else if (command === 'play') {
        client.commands.get('play').execute(message, args, command, client, Discord)
    }

    else if (command === 'embed2') {
        client.commands.get('embed2').execute(message, args)
    }

    else if (command === 'embed3') {
        client.commands.get('embed3').execute(message, args)
    }

    else if (command === 'embed4') {
        client.commands.get('embed4').execute(message, args)
    }

    else if (command === 'embed5') {
        client.commands.get('embed5').execute(message, args)
    }

    else if (command === 'cl') {
        client.commands.get('cl').execute(message, args)
    }

    else if (command === 'embed6') {
        client.commands.get('embed6').execute(message, args)
    }

    else if (command === 'skip') {
        client.commands.get('skip').execute(message, args, command, client, Discord)
    }

    else if (command === 'stop') {
        client.commands.get('stop').execute(message, args, command, client, Discord)
    }

    else if (command === 'leave') {
        client.commands.get('leave').execute(message, args)
    }

    else if (command === 'asigei') {
        client.commands.get('asigei').execute(message, args)
    }

    else if (command === 'commands') {
        client.commands.get('commands').execute(message, args)
    }

    else if (command === 'slowmode') {
        client.commands.get('slowmode').execute(message, args)
    }

    else if (command === 'say') {
        client.commands.get('say').execute(client, message, args)
    }

    else if (command === 'userinfo') {
        client.commands.get('userinfo').execute(client, message, args)
    }

    else if (command === 'embed') {
        client.commands.get('embed').execute(client, message, args)
    }

    else if (command === 'reload') {
        client.commands.get('reload').execute(client, message, args,)
    }

    else if (command === '8ball') {
        client.commands.get('8ball').execute(client, message, args,)
    }

    else if (command === 'ping') {
        client.commands.get('ping').execute(client, message,)
    }

    else if (command === 'emojify') {
        client.commands.get('emojify').execute(client, message, args, Discord)
    }

    else if (command === 'meme') {
        client.commands.get('meme').execute(client, message, args)
    }











});


client.login('OTEzOTExODY5OTk4MjU2MjIw.YaFYwQ.SbT09mAoQODD2YMdEKLsaNm7FdU');
// npm i discord-player
// npm i @discordjs/opus
// npm i ytdl-core
// npm i ffmpeg-static