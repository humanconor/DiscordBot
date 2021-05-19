module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.roles.cache.has('773252528011345921')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("User has been banned! Naughty, Naughty, Boy!")
            }else{
                message.channel.send('-ban can be used by anyone with the Moderator role in this server. Mention a member with a reason to ban them!');
            }
        } else {
            message.channel.send('Invalid Permissions, Dummy!')
        }
    }
}