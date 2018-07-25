exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            description: " ** Invite me to your server! ** \n https://discordapp.com/oauth2/authorize?&client_id=471399741260038154&scope=bot&permissions=0 \n **My Support Discord!** \n https://discord.gg/EcX9Etg "
        }
    });
}