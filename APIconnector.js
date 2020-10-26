/*
API Key: 85ikhwV5d1Azl4nA2FUsMqn8P
Secret Key: Ygr7qVu4e0MMTFZ4KxoU2pdsG1nFniX5jyrJhK4QFBlRUpjH7z
Bear token: AAAAAAAAAAAAAAAAAAAAALn8IwEAAAAAi6xU%2B5dhETqw%2FYGxGq6EDP7wPUY%3D26apl7lZ5r1YHdmwkghhvzWKY3wxaJZp8ek5lGjTrWYPwL3TPo
*/

console.log('The bot is starting')

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config)

var currentDate; // TODO: find function that gets the current date in YYYY-MM-DD format

function searchTwitterFor(keyword, date) {
    T.get('search/tweets', { q: `${keyword} since:${date}`, count: 100 }, function(err, data, response) { //TODO: search for tweets going back at least a week
        console.log(data)
      })
}

function searchTwitterFrom(location) {
    var coordinates = location   //TODO: convert location into coordinates 
  
    var stream = T.stream('statuses/filter', { locations: sanFrancisco })
 
    stream.on('tweet', function (tweet) {
    console.log(tweet)
    })
}

function searchTwitterWhen(date) {
    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) { //TODO: Search for what was trending during this date time 
        console.log(data)
      })
}





