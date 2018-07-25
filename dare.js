const { stripIndents } = require('common-tags');
const answers = require('./answersd.json');
exports.run = (client, message, args) => {
    return message.channel.send(stripIndents`
			 ${answers[Math.floor(Math.random() * answers.length)]} 
		`);
}