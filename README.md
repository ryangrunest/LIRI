# LIRI
## Node App - Language Interpretation &amp; Recognition Interface


### Introduction
LIRI is like SIRI, except not at all.  It is a command line node app that takes in parameters and outputs data.

## Setup

#### 1. Clone or Download the repository onto your local machine

#### 2. Within the command line or terminal Run npm install, and the following packages should be installed:

* [axios](https://www.npmjs.com/package/axios)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [moment](https://www.npmjs.com/package/moment)
* [node-spotify-api](https://www.npmjs.com/package/node-spotify-api)

## NOTICE
## You will need to retrieve API keys for [spotify](https://developer.spotify.com/dashboard/login), [bandsintown](https://manager.bandsintown.com/), and [OMDB](http://www.omdbapi.com/).

#### 3. Create a file named keys.js and store it somewhere safe (you will need to reference it):

* Inside keys.js insert the following code:

``` JavaScript

exports.spotify = {
  id: (YOUR SPOTIFY ID),
  secret: (YOUR SPOTIFY SECRET)
};

exports.bandsInTown = {
    app_id: (BANDS IN TOWN APP ID)
};

exports.OMDB = {
    API_KEY: (OMDB API KEY)
};


```

## Run the application
* To install globally:
```
npm install -g
```
The syntax to run the program is:
```
node app <function> <parameter>
```

Available functions:
* spotify

* movie

* concert

* do

Running the following commands in your terminal will do the following:


```
node app spotify <song name>
```

* log the following information about the song:

	* Name Of Song
	* Name Of Album
	* Artist Name
	* Link To Song on Spotify

* if no song is provided then the program will output information for the song 'The Sign of The Times' by Harry Styles

```
node app movie <movie name>
```

* this would log the following information about the movie:

	* Title
	* Year
	* Plot
	* Actors
	* IMDB Rating
	* Rotten Tomatoes Rating
	* Language
	* Country

* if no movie is provided then the program will output information for the movie 'Mr. Nobody'

```
node app concert <artist name>
```

* Searches for all upcoming concerts for artist, and logs the following information:

	* Venue
	* City of Event
	* Date of Event


```
node app do
```

* The program will take the text inside of random.txt and use it to call the first command with the second part as it's parameter

* By default, random.txt contains :

```
spotify,"I Want it That Way'
```

* This would call the spotify function for 'I Want it That Way'

* This should work for any function and parameter you use.

* All commands and output are logged in terminal.log.

# Copyright
(C) Ryan Grunest. All Rights Reserved