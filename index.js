const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", 'REACTION']});

const prefix = '-';

const fs = require('fs');

const memberCounter = require('./counters/member-counter')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles ){
    const command = require(`./commands/${file}`);

client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('T995 Resource Manager is back online!');
    client.user.setActivity('Down for 3 hours; needed Node.JS maintenance.');
    memberCounter(client)
});
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Unverified');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('833842854317129738').send(`Welcome to our server, <@${guildMember.user.id}>! Make sure to follows the instructions above!`)
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'emails'){
       client.commands.get('emails').execute(message, args);
    }   
    if(command === 'credits'){
        client.commands.get('credits').execute(message, args);
    }
    if(command === 'meeting'){
        client.commands.get('meeting').execute(message, args);
    }
    if(command === 'schedule'){
        client.commands.get('schedule').execute(message, args);
    }
    if(command === 'groups'){
        client.commands.get('groups').execute(message, args);
    }
    if(command === 'supplies'){
        client.commands.get('supplies').execute(message, args);
    }
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    if(command === 'patrols'){
        client.commands.get('patrols').execute(message, args);
    }
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    if(command === 'monday'){
        client.commands.get('monday').execute(message, args);
    }
    if(command === 'minecraft'){
        client.commands.get('minecraft').execute(message, args);
    }
});





client.login('(redacted for security)');
