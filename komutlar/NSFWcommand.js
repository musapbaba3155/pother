const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Nsfw Komutları**", "nsfw-gif = Porno Gif Verir. \npgif = Porno Gif Verir. \nkaçcm = Penis Büyüklüğünüzü Gösterir. \n4K = 4K Porno Gif Verir. \nanalp = Anal Porno Veya Başka Gif Verir.")
  .setFooter('NSFW KOMUTLARI')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'nsfw',
  description: 'Kullanıcı komutları gösterir.',
  usage: 'nsfw [komut]'
};
