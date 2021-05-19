module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args){
        var member = message.mentions.users.first();
        if(message.member.roles.cache.has('773252528011345921')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send("User has been kicked! Naughty, Naughty, Boy!")
            }else{
                message.channel.send('-kick can be used by anyone with the Moderator role in this server. Mention a member with a reason to kick them!');
            }
        } else {
            message.channel.send('Invalid Permissions, Dummy!')
        }
    }
}