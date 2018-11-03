var CronJob = require('cron').CronJob;
var request = require('request');


new CronJob('* */8 * * *', function() {
 	console.log('You will see this message every second');
	
	request('http://52.66.212.208:3000/feedreading', function (error, response, body) {

	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body); // Print the HTML for the Google homepage.

	});
}, null, true, 'America/Los_Angeles');
3
