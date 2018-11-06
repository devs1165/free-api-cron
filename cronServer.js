var CronJob = require('cron').CronJob;
var request = require('request');

// http://52.66.212.208:3000/feedreading
new CronJob('* */8 * * *', function() {
// new CronJob('*/1 * * * *',function(){
 	// console.log('You will see this message every second');
	
	request('http://52.66.212.208:3000/feedreading', function (error, response, body) {
	console.log('cron tiggered at ' + new Date(Date.now()))	
	if(error){
			console.log('error:', error + ' at '+ new Date(Date.now())); // Print the error if one occurred
		}else{
			// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			console.log('body:', body + ' at '+ new Date(Date.now())); // Print the HTML for the Google homepage.

		}

	});
}, null, true, 'America/Los_Angeles');

