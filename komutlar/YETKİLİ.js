const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Yetkili Komutları**", `ban = İstediğiniz Kişiyi Sunucudan Banlar. \notorol-ayarla = Otorol Ayarlar. \notorol-mesaj-kapat = Otorol Mesajı Kapatır. \notorol-kapat = Otorol Kapatır. \ngiriş-çıkış-ayarla = Giriş Ve Çıkış Kanalı Ayarlar.\noyundeğiş = Botun Oynuyor Kısmını Değiştirir. \nkick  = İstediğiniz Kişiyi Sunucudan Atar. \nrololuştur = Rol Oluşturur. \ntemizle = Mesajları Siler \nunban = İstediğiniz Kişinin Yasağını Açar. \nmute = İstediğiniz Kişiyi Susturur. \noylama = Oylama Açar. \nduyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .setFooter('YETKİLİ KOMUTLARI')
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
  name: 'yetkili',
  description: 'Moderatör komutları gösterir.',
  usage: 'yetkili [komut]'
};
