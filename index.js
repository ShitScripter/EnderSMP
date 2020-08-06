// Variables
const Discord = require('discord.js');
const bot = new Discord.Client();

require("./util/eventHandler")(bot)
//-------------------------

bot.on('ready', () => {
    console.log('AlternatorMC Bot; is online');

});

// Commands


bot.on("message", function(message) {
    let channelVar = bot.guilds.cache.get('653102601235333121').channels.cache.get('710930613774844004');
    if (message.content === '>ip') {
        message.channel.send("AlternatorMC.com | Version 1.15.2");

    }

});

//----------------------------  


// Communicate
bot.on('message', msg => {
    if (msg.content === "are u here AlternatorMC") {
        msg.channel.send('Yes I am here');
    }
});
//--------------------------

// Greetings
bot.on('message', msg => {
    if (msg.content === "hi") {
        msg.channel.send('Hello!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "hi!") {
        msg.channel.send('Hello!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "Hi") {
        msg.channel.send('Hello!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "Hi!") {
        msg.channel.send('Hello!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "hello") {
        msg.channel.send('Hi!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "hello!") {
        msg.channel.send('Hi!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "Hello") {
        msg.channel.send('Hi!!');
    }
});

bot.on('message', msg => {
    if (msg.content === "Hello!") {
        msg.channel.send('Hi!!');
    }
});
//---------------------------------

// Fun things


bot.on("message", function(message) {
    let channelVar = bot.guilds.cache.get('653102601235333121').channels.cache.get('711047144513208351');
    if (message.content === "ping") {
        channelVar.send('**Pong!** :ping_pong:');
    }
});

bot.on("message", function(message) {
    let channelVar = bot.guilds.cache.get('653102601235333121').channels.cache.get('711047144513208351');
    if (message.content === "Ping") {
        channelVar.send('**Pong!** :ping_pong:');
    }
});

bot.on("message", function(message) {
    let channelVar = bot.guilds.cache.get('653102601235333121').channels.cache.get('711047144513208351');
    if (message.content === "pong") {
        channelVar.send('**Ping!** :ping_pong:');
    }
});

bot.on("message", function(message) {
    let channelVar = bot.guilds.cache.get('653102601235333121').channels.cache.get('711047144513208351');
    if (message.content === "Pong") {
        channelVar.send('**Ping!** :ping_pong:');
    }
});




// Guild member add
bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'server-messages');
    welcomeChannel.send(`Welcome! ${member}! Make sure to ">rules" to see the rules to the server!`);

});


bot.on("message", function(message) {
    let channelVar = bot.guilds.cache.get('653102601235333121').channels.cache.get('710930613774844004');
    if (message.content === '1') {
        channelVar.send("2");
    }

});



bot.on("message", function(message) {
if (message.content === ">rules") {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permission");
            message.channel.send("```diff\n-Discord Rules | Breaking any of these rules will result in an immediate ban\n!➼ No Harassment. This includes Sexist, Racial, Homophobic or just generally rude comments towards any player\n!➼ No NSFW. Keep the channel PG\n!➼ No Cursing.\n!➼ No Controversial or triggering topics. Including suicide, self-harm, substance abuse, sexual content, etc.\n!➼ No advertising of any kind (This includes dm advertising)\n!➼ Use the channels appropriately\n!➼ Staff decisions are final\n!➼ Use Common Sense\n\n!➼ All Discord Terms of Service (https://discordapp.com/terms) apply. Breaking any of these will result in a permanent ban from the server. (This includes DM Advertising) If you witness any of these terms being broken, **please report them to a server Staff Member immediately**.\n\n\n-Server Rules | All Previous rules Apply!\n!➼ No Cheating/Hacking. This includes but is not limited to injecting cheats into PVP clients, Xray texture packs, ghost clients. (PVP Clients are OK)\n!➼ No abusing Glitches/Exploits. If you are caught doing so you will be permanently banned. *     *Please report these glitches to the staff members IMMEDIATELY**.\n!➼ Schematica is OK but printer is not.\n```");

    }
});


bot.on("message", function(message) {
    if (message.content === ">BulkDelete 10") {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permission");
                message.channel.bulkDelete(10);
                message.channel.send("Deleted <10> messages")
                message.delete();
                message.edit.message(" ")
        }
});


    bot.on("message", function(message) {
        if (message.content === ">BulkDelete 20") {
            if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permission");
                    message.channel.bulkDelete(20)
                    message.channel.send("Deleted <20> messages")
                    message.delete()
            }
});    

bot.on("message", function(message) {
    if (message.content === ">BulkDelete 30") {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permission");
                message.channel.bulkDelete(30)
                message.channel.send("Deleted <30> messages")
                message.delete()
        }
});    

bot.on("message", function(message) {
    if (message.content === ">BulkDelete 40") {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permission");
                message.channel.bulkDelete(40)
                message.channel.send("Deleted <40> messages")
                message.delete()
        }
});    

bot.on("message", function(message) {
    if (message.content === ">BulkDelete 50") {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permission");
                message.channel.bulkDelete(50)
                message.channel.send("Deleted <50> messages")
                message.delete()
        }
});    

////
// Login / Run

bot.login(process.env.token);

//--------------
