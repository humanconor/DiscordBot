module.exports = {
    name: 'monday',
    description: "this is a meeting command!",
    execute(message, args){

        if(message.member.roles.cache.has('773252528011345921')){
            message.channel.send('We are hosting a meeting in the Stage VC if anyone wants to attend, here is the link! https://discord.gg/Ab6FRBXw2w')
        
        
        } else {
            message.channel.send('Invalid Permissions')
        }
    }
}