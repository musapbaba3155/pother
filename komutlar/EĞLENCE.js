const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence Komutları**", `afk = Afk Olursunuz. \nunafk = Afktan Çıkarsınız. \naşkölçer = Aşk Ölçersiniz. \natatürk  = Atatürk Resimleri Verir. \nrololuştur = Rol Oluşturur. \ntemizle = Mesajları Siler \nbalıktut = Balık Tutarsınız. \nbilgi = Kendi Hakkında Bilgi Verir. \ncsgo = C.S GO Bilgilerinizi Verir. \nçayaşekerat = Çaya Şeker Atar. \nçayiç = Çay İçersiniz. \nçekiç = Çekiç Atarsınız. \ndavet = Davet Linki Verir. \ndönenrenkler = Dönen Renkleri Verir. \ndüello = Düello Yaparsınız. \nefkar = Efkar Ölçersiniz. \nemojiyazı = Yazınızı Emojiye Çevirir. \nfortnite = Fortnite Bilgilerinizi Verir. \ngifara = Gif Ararsın. \ngoogle = Google Link Verir. \nhacked = Hacked Yaparsınız. \nhapishane = PPnize Hapishane Efekti Verir. \nhastebin = Hastebine Kod Yazarsınız. \nhavadurumu = Hava Durumunu Görüntüler.`)
  .setFooter('EĞLENCE KOMUTLARI')
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
  name: 'eğlence',
  description: 'Moderatör komutları gösterir.',
  usage: 'eğlence [komut]'
};
