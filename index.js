// Variables
const Discord = require('discord.js');
const bot = new Discord.Client();
//-------------------------

bot.on('ready', () => {
    console.log('Bot is online');
});

// Commands

bot.on('message', msg => {
    if (msg.content === "e!ip") {
        msg.reply('endersplace.crafted.pro -Version 1.15.2');
    }
});

//----------------------------

// Communicate
bot.on('message', msg => {
    if (msg.content === "are u here enderSMP") {
        msg.reply('Yes I am here');
    }
});
//--------------------------


// Greetings
bot.on('message', msg => {
    if (msg.content === "hi") {
        msg.reply('Hello!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "hi!") {
        msg.reply('Hello!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "Hi") {
        msg.reply('Hello!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "Hi!") {
        msg.reply('Hello!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "hello") {
        msg.reply('Hi!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "hello!") {
        msg.reply('Hi!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "Hello") {
        msg.reply('Hi!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "Hello!") {
        msg.reply('Hi!!');
    }
});
//---------------------------------

// Fun things

bot.on('message', msg => {
    if (msg.content === "ping") {
        msg.reply('pong');
    }
});


bot.on('message', msg => {
    if (msg.content === "pong") {
        msg.reply('ping');
    }
});


bot.on('message', msg => {
    if (msg.content === "kms") {
        msg.reply('BANG');
        msg.reply('BANG');
    }
});

//-----------------------------

bot.on('message', msg => {
    if (msg.content === "!Rules") {
        msg.reply('Respect and listen to staff, Respect others, Dont Curse, Have fun! See more info in #rules');
    }
});

// Login / Run

bot.login(process.env.token);
