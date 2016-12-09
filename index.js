var SlackBot = require('slackbots');

var bot = new SlackBot({
    token: 'token', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'poopBot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    var params = {
		icon_emoji: ':shit:'
    };
	
	bot.postMessageToUser('nico', 'poop', params); 
	
	bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm 
    console.log(data);
});
});
