require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var action = process.argv[2];
var parameter = process.argv[3];




function switchCase() {

  switch (action) {

    case 'concert-this':
      bandsInTown(parameter);                   
      break;                          

    case 'spotify-this-song':
      spotSong(parameter);
      break;

    case 'movie-this':
      movieInfo(parameter);
      break;

    case 'do-what-it-says':
      getRandom();
      break;

      default:                            
      logIt("Invalid Instruction");
      break;

  }
};

