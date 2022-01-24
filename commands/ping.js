const { MessageEmbed } = require('discord.js');
const quick = require('quick.db');

module.exports = {
  name: 'ping',
  aliases: [],
  description: 'Get bot ping.',
  async execute(client, message) {
    const ping = await getDBPingData();
    const messagePing = Date.now(); 
    const msg = await message.channel.send('Loading...');
    const endMessagePing = Date.now() - messagePing; 

    const embed = new MessageEmbed() 
      .setDescription(
        `
        Database ping data:
        - Fetch ping: \`${ping.endGet}ms\`
        - Wright ping: \`${ping.endWright}ms\`
        - Avrage ping: \`${ping.avarage}ms\`
        Message ping: \`${endMessagePing}ms\`
      `
      )
      .setColor('GREEN')
      .setTimestamp();

    msg.edit({
      content: '',
      embed,
    }); // edit message content
  },
};

async function getDBPingData() {
  // get the fetch data ping
  const startGet = Date.now();
  await quick.get('QR=.');
  const endGet = Date.now() - startGet;

  // get the wright data ping
  const startWright = Date.now();
  await quick.set('QR=.', Buffer.from(startWright.toString()).toString('base64'));
  const endWright = Date.now() - startWright;

  // avrage ping time
  const avarage = (endGet + endWright) / 2;
  try {
    quick.delete('QR=.'); // try deleteing
  } catch (error) {}
  return { endGet, endWright, avarage }; // return the ping data
}