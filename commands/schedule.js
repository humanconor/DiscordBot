module.exports = {
    name: 'schedule',
    description: 'this is a meeting command',
    execute(message, args){
        message.channel.send('Upcoming events are as follows: New Guy Campout - 5/21/2021');
    }
}