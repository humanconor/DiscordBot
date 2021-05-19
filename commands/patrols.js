module.exports = {
    name: 'patrols',
    description: 'this is a patrols command',
    execute(message, args){
        message.channel.send('Here is a list of all the patrols: Black Cats, Valkries, Bionic Beavers, Golden Eagles, Golden Arrows, Tsuper Tsunamis, Raging Raptors, and Spartans.');
    }
}