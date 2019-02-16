const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Diğer Komutlar**", `istatistik = İstatikleri Verir. \nKoş = Koşarsınız. \nkullanıcıbilgim = Hakkınızda Bilgi Verir. \nmcödül = Minecraft Ödül Verir. \nöneri = Öneride Bulunursunuz. \npartner = PPnize Partner Efekti Verir. \nping = Ping Değerini Gösterir. \npixel = PPnizi Pixel Yapar. \nrip = Rip Efekti Verir. \nsaat = Türkiye Saatini Gösterir. \nspeedtest = İnternet Hızınızı Gösterir. \nspotif = Spotif Şarkısını Gösterir. \nsteamfiyat = Steam Oyununun Fiyatını Gösterir. \nsunucubilgi = Sunucu Hakkında Bilgi Verir. \nsunucuresmi = Sunucunun Resmini Atar. \ntersavatar = Avatarınızı Ters (bozuk ) Hale Çevirir. \ntürkiye = PPnize Türkiye Efekti Verir. \nwasted = PPnize Wasted Efekti Verir. \nyaz = Bota Bir Şey Yazdırır. \nyetkilerim = Sunucuda ki Yetkilerinizi Gösterir. \nyoutube = Youtube Linki Verir.`)
  .setFooter('DİĞER KOMUTLAR')
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
  name: 'diğer',
  description: 'Moderatör komutları gösterir.',
  usage: 'diğer [komut]'
};
