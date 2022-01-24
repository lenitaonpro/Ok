const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(client, message, args) {
    if (!args[0]) return message.channel.send('Kysy kokonainen kysymys kiitos!'); // return if no question is commenced
    const replies = ['Kyllä.', 'Ei.', 'Ei todellakaan.', 'Tottakai.', 'Kysy myöhemmin uudestaan.']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed() // create embed 
        .setAuthor('🎱...')
        .setColor('ORANGE').addField('Question:', question)
        .addField('Answer:', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Kysymys:**\n${question}\n**Vastaus:**\n${replies[result]}`);
    }
  },
};