module.exports = {
    name: 'ticket',
    aliases: [],
    permissions: ["CONNECT"],
    description: "Avaa tiketti!",
    async execute(message, args, cmd, client, discord) {
        console.log(message.guild);
        const channel = await message.guild.channels.create(`Tiketti`);
        channel.setParent("932233759426748416");

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true,
        });

        const reactionMessage = await channel.send('Tervetuloa tikettiin, Ethän tägää ylläpitoa kiitos!');

        try {

            await reactionMessage.react("🔒");
            await reactionMessage.react("⛔");
        } catch (err) {
            channel.send("Tapahtui virhe lähettäessäsi emojeja!");
            throw err;
        }

        const collector = reactionMessage.createReactionCollector(
            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTATOR"),
            { dispose: true }
        );

        collector.on("collect", (reaction, user) => {
            switch (reaction.emoji.name) {
                case "🔒":
                    channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
                    break;
                case "⛔":
                    channel.send("Kanava poistuu 5 sekunnin kuluttua!");
                    setTimeout(() => channel.delete(), 5000);
                    break;
            }
        });

        message.channel.send(`Vastaamme sinulle mahdollisimman pian! ${channel}`).then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
        }).catch((err) => {
            throw err;
        });
    },
};