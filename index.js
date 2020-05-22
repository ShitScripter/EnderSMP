const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is online');
});

bot.on('message', msg=>{
    if(msg.content === "!Ip"){
        msg.reply('endersplace.crafted.pro -Version 1.14.4');
    }
})

bot.on('message', msg=>{
    if(msg.content === "pong"){
        msg.reply('ping');
    }
})

bot.on('message', msg=>{
    if(msg.content === "kms"){
        msg.reply('BANG');
        msg.reply('BANG');
    }
})

bot.on('message', msg=>{
    if(msg.content === "are u here enderSMP"){
        msg.reply('Yes I am here');
    }
})

bot.on('message', msg=>{
    if(msg.content === "can u ban someone for me"){
        msg.reply('Yes, Who?');
    }
})


bot.on('message', msg=>{
    if(msg.content === "hi"){
        msg.reply('Hello!!');
    }
})


bot.on('message', msg=>{
    if(msg.content === "ping"){
        msg.reply('pong');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!Rules"){
        msg.reply('Respect and listen to staff, Respect others, Dont Curse, Have fun! See more info in #rules');
    }
})


bot.login(process.env.token);