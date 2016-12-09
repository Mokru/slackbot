var SlackBot = require('slackbots');

var bot = new SlackBot({
    token: 'token',
    name: 'poopBot'
});
//on start ->
bot.on('start', function() {
    var params = {
	    	//set avatr to :shit
		icon_emoji: ':shit:'
    };
	//pm user 'nico' with 'poop'
	bot.postMessageToUser('nico', 'poop', params); 
	
	//on message data ->
	bot.on('message', function(data) {
		// dump info into console
    console.log(data);
});
});
