module.exports = async (client) =>{
    const guild = client.guilds.cache.get('722959511366795376');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('843524001065992202');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}