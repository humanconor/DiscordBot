module.exports = {
    name: 'minecraft',
    description: "this is a minecraft command!",
    execute(message, args){

        if(message.member.roles.cache.has('844596162815066142')){
            message.channel.send('<@&844595980023758849> We are hosting a Minecraft Java Gamenight! The IP is 51.222.125.169:2044. Please be respectful of others and their builds. You are not the only one in the server.')
        
        
        } else {
            message.channel.send('Invalid Permissions')
        }
    }
}   