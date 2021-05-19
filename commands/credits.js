module.exports = {
    name: 'credits',
    description: 'this is a credits command',
    execute(message, args){
        message.channel.send('This bot is made by Conor K');
    }
}