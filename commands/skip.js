const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


module.exports = {
    name: 'skip',
    description: 'Skips a song',

    async execute(message, args, command, client, Discord) {
        const skip_song = (message, server_queue) => {
            if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
            if (!server_queue) {
                return message.channel.send('There are no songs in the queue');
            }
            server_queue.connection.dispatcher.end();
        }


    }

}