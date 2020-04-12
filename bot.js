const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Njk4Njc2OTY3MjM4Nzk1Mjg2.XpJVmA.H1fLtVHm2mE0dQSpmfU5QQxnN8Y'
const prefix = "!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(msg)
    if(msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    const sanitizedMsg = msg.content.substring(1).toLowerCase();
    if(sanitizedMsg === 'ping'){
        msg.reply('Pong!');
    }else{
        msg.reply('I am still in development and I\'m currently living in Duelstein\'s PC. Dont strain me to much '+msg.author.displayName+'!')
    }
});

client.login(token);