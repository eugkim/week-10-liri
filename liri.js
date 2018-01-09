var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');

var command = process.argv[2];

//possible commands
switch (command) {
  case "my-tweets": myTweets(); 
  break;

  case "spotify-this-song":
    spotifySong(); 
  break;

  case "do-what-it-says":
    doIt();
  break;

  default:
    console.log("{Please choose a command: my-tweets, spotify-this-song, do-what-it-says}");
  break;
}

function myTweets() {

  var userName = {client: 'hypedCLE'};
  client.get('statuses/user_timeline', userName, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        var date = tweets[i].created_at;
        console.log("@hypedCLE: " + tweets[i].text + " Created At: " + date.substring(0, 19));
        console.log("-----------------------");
        
        //add text to log.txt file
        fs.appendFile('log.txt', "@hypedCLE: " + tweets[i].text + " Created At: " + date.substring(0, 19));
        fs.appendFile('log.txt', "-----------------------");
      }
    }
    else {
      console.log('Error');
    }
  });
};

function spotifySong(songTitle) {
  var songTitle = process.argv[3];
  spotify.search({ type: 'track', query: song}, function(error, data) {
    if (!error) {
      for (var i = 0; i < data.tracks.items; i++) {
        var song = data.tracks.items[i];
        //artist
        console.log("Artist(s): " + song.artists[0].name);
        //song
        console.log("Song: " + song.name);
        //album
        console.log("Album: " + song.album.name);
        //preview link
        console.log("Preview URL: " + song.preview_url);

        console.log("--------");
        
        //adds text to log.txt
        fs.appendFile('log.txt', song.artists[0].name);
        fs.appendFile('log.txt', song.name);
        fs.appendFile('log.txt', song.album.name);
        fs.appendFile('log.txt', song.preview_url);
        fs.appendFile('log.txt', "--------");
      }
    } 
    else {
      song = 
      console.log('Error!');
    }
  });
};
//read module to access random.txt file
function doIt() {
  fs.readFile('random.txt', "utf8", function(error, data) {
    var txt = data.split(',');
  });
};


// BONUS
// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file. 
// Do not overwrite your file each time you run a command.
