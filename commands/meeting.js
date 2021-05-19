module.exports = {
    name: 'meeting',
    description: 'this is a meeting command',
    execute(message, args){
        message.channel.send('Current Meeting Link: https://us02web.zoom.us/j/87959789797?pwd=MXpkWTFDV3BLSmRJNU4yR28vemhjQT09');
    }
}