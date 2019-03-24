// get spotify API
// get OMDB API
// get BandsInTown API

// Axios Package from NPM

// Moment.JS

// DotEnv



require('dotenv').config();

var keys = require('./keys.js');

var spotify = new spotify(keys.spotify);




// LIRI will take following commands:


// node liri.js concert-this <artist/band name here>
// search bandsintown api for artist events api
// renders to the terminal:
// name of venue, venue location, date of event

// spotify-this-song <song name here>
// shows following information about the song
// artists, the songname, a preview of the song in spotify,  the album the song is from
// if no song is provided it will default to 'the sign'  by ace  of base

// Example of Spotify API
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

// movie-this <movie name here>
// outputs  following info:
// Title  of the movie,  year released, imdb rating, rotten tomatoes  rating, country produced
// language of the movie, plot, actors in movie
// defaults to Mr. Nobody.

// do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.