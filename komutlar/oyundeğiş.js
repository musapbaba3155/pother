const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '544500260211523584') return message.reply('Bu Komutu Kullanmak İçin @Founder Rolüne Sahip Olmalısın. ');
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyundeğiş',
  description: 'Botun pingini gösterir.',
  usage: 'oyundeğiş'
};