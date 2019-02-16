const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Ölçüyorum...').then(message => {
   var espriler = ['<---------3 - Geliştirmeli...' ,'<-----------------3;) - Waoww!!' ,'<-------------------3 İş Görür'  ,'<---3 - Ölmelisin!' ,'<---------------------3 - Ohaaa :O'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık tut', 'balık-tut', 'balık-tut', 'balık tut'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Balık Tutarsın.',
  usage: 'kaçcm'
};
