exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: 6467003,
            description: "**Commands:**\n**1. !truth** - Responds with a random truth\n**2. !dare** - Responds with a random dare\n**3. !ping** - pong!\n**4. !version** - What version I’m on. If it changes it means I have updated!\n**5. !invite** - Sends a link to invite me to your server and a link to the support server!\n**6. !help** - Shows this message with commands!"
        }
    });
}