// DotEnv
require('dotenv').config();
// store program to run in variable
let call = process.argv[2];
// concatenate all search words together to form one variable
let searchTerm = process.argv.splice(3, process.argv.length - 1).join();
searchTerm = searchTerm.replace(/,/g, ' ');

// Axios Package from NPM
const axios = require("axios");
// Moment.JS
const moment = require('moment');

// Spotify
const Spotify = require('node-spotify-api');
const keys = require('./keys.js');
const spotify = new Spotify(keys.spotify);




// LIRI will take following commands:


// node liri.js concert-this <artist/band name here>
// search bandsintown api for artist events api
// renders to the terminal:
// name of venue, venue location, date of event




// spotify-this-song <song name here>
if (call === 'spotify-this-song') {
    if (searchTerm === undefined) {
        // if no song is provided it will default to 'the sign'  by ace  of base
        searchTerm = 'the Sign';
    }
    spotify.search({ type: 'track', query: searchTerm, limit: '1' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        // shows following information about the song
        // artists, the songname, a preview of the song in spotify,  the album the song is from
        let artists = data.tracks.items[0].artists[0].name;
        let songName = data.tracks.items[0].name;
        let preview = data.tracks.items[0].external_urls.spotify;
        let album = data.tracks.items[0].album.name;
        console.log('~~~~~~~~~~~~~~~~~~~~');
        console.log('Searching For Song...');
        console.log('~~~~~~~~~~~~~~~~~~~~');
        console.log(`Name of Song: ${songName}`);
        console.log(`Name of Album: ${album}`);
        console.log(`Artist Name: ${artists}`);
        console.log(`Link to Song: ${preview}`);
        console.log('~~~~~~~~~~~~~~~~~~~~');
    });
      
}

// movie-this <movie name here>
// outputs  following info:
// Title  of the movie,  year released, imdb rating, rotten tomatoes  rating, country produced
// language of the movie, plot, actors in movie
// defaults to Mr. Nobody.
if (call === 'movie-this') {
    let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    if (movieName != undefined) {
        axios.get(queryUrl).then(
            function(response) {
                  console.log(response.data.Title);
                  console.log(response.data.Released);
            }
          );
    }
}


// do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.