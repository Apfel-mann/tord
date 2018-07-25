exports.run = (client, message, args) => {
    message.channel.send("**version**: 1.26.4").catch(console.error);
}