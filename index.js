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

bot.on('message', msg => {
    if (msg.content === "e!rules") {
        msg.reply('```Diff -Discord Rules | Breaking any of these rules will result in an immediate ban \n !➼ No Harassment. This includes Sexist, Racial, Homophobic or just generally rude comments towards any player \n !➼ No NSFW. Keep the channel PG \n !➼ No Cursing. \n !➼ No Controversial or triggering topics. Including suicide, self-harm, substance abuse, sexual content, etc. \n !➼ No advertising of any kind (This includes dm advertising) \n !➼ Use the channels appropriately \n !➼ Staff decisions are final \n !➼ Use Common Sense \n !➼ All Discord Terms of Service (https://discordapp.com/terms)  apply. Breaking any of these will result in a permanent ban from the server. (This includes DM Advertising) If you witness any of these terms being broken, please report them to a server Staff Member immediately. \n -Server Rules | All Previous rules Apply! \n !➼ No Cheating/Hacking. This includes but is not limited to injecting cheats into PVP clients, Xray texture packs, ghost clients. (PVP Clients are OK) \n !➼ No abusing Glitches/Exploits. If you are caught doing so you will be permanently banned. Please report these glitches to the staff members IMMEDIATELY. \n !➼ Schematica is OK but printer is not.```');
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
// Guild member add
bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'general')
    welcomeChannel.reply (`Welcome! ${member}! Make sure to "e!rules" to see the rules to the server!`)
    
});
//-----------------------------
//-----------------------------


// Login / Run

bot.login(process.env.token);
