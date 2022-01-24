const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


const queue = new Map();

module.exports = {
    name: 'play',
    description: 'Advanced music bot',
    async execute(message, args, command, client, Discord) {
        


        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('Sinun pitää olla puhekanavallall käyttääksesi tätä komentoa!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('BAN_MEMBERS')) return message.channel.send('Sinulla ei ole oikeuksia käyttää tätä komentoa');
        if (!permissions.has('MUTE_MEMBERS')) return message.channel.send('Sinulla ei ole oikeuksia käyttää tätä komentoa');


        const server_queue = queue.get(message.guild.id);


        if (command === 'play') {
            if (!args.length) return message.channel.send('Sinun pitää liittää URL Osoite tai laulun nimi!');
            let song = {};


            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
            } else {

                const video_finder = async (query) => {
                    const video_result = await ytSearch(query);
                    return (video_result.videos.length > 1) ? video_result.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if (video) {
                    song = { title: video.title, url: video.url }
                } else {
                    message.channel.send('Tällä nimellä ei löytynyt laulua.');
                }
            }

            if (!server_queue) {

                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }


                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);


                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('Tapahtui virhe yhdistäessä!');
                    throw err;
                }
            } else {
                server_queue.songs.push(song);
                return message.channel.send(`👍 **${song.title}** Lisätty jonoon!`);
            }
        }

    }

}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            song_queue.songs.shift();
            video_player(guild, song_queue.songs[0]);
        });
    await song_queue.text_channel.send(`🎶 Nyt Soi **${song.title}**`)
}