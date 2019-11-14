var axios = require("axios");

require("dotenv").config();

var artist = process.argv[2];

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp


//concert-this

    //link up bandsintown api and concatenate query url to isolate
    //bands/artists and also api key
    //retrieve venue, venue location, and date of the event

//spotify-this-song

    //will show information about the song that was entered into bash
    //include artist, song name, album, and link to preview on spotify
    //default to  "The Sign" by Ace of Base


//movie-this


//do-what-it-says