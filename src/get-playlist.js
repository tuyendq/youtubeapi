const dotenv = require('dotenv').config();
const ypi = require('youtube-playlist-info');
const fs = require('fs');
const path = require('path');

var playlistId = process.argv[2] || 'PLroUsGOhJjhJB1sG1cZDDzDZOJs7rbeTd';
var playlistFile = path.join(__dirname, playlistId) + '.json';
ypi(process.env.YOUTUBE_API_KEY, playlistId)
    .then(items => {
        // console.log(JSON.stringify(items))
        // fs.appendFile(playlistFile, JSON.stringify(items), (err) => {
        fs.appendFile(playlistFile, items, (err) => {
            if (err) throw err;
            console.log(`Playlist saved in ${playlistFile}`);
        })
    })
    .catch(console.error)
