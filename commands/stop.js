const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


module.exports = {
    name: 'stop',
    description: 'Stops a song',
    async execute(message, args, command, client, Discord) {
        const stop_song = (message, server_queue) => {
            if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
            server_queue.songs = [];
            server_queue.connection.dispatcher.end();
        }

    }

}