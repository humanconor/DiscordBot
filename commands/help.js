module.exports = {
    name: 'help',
    description: 'this is a help command',
    execute(message, args){
        message.channel.send('Commands are as follows: Credits, Ban, Mute, Monday, Minecraft, Kick, Emails, Groups, Help, Meeting, Ping, Schedule, and Supplies.');
    }
}