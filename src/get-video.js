'use strict';

const dotenv = require('dotenv').config();
const {google} = require('googleapis');

const youtube = google.youtube('v3');

// var videoId = 'Ks-_Mh1QhMc';
var videoId = process.argv[2];

const params = {
    key: process.env.YOUTUBE_API_KEY,
    part: 'snippet',
    id: videoId
};

var result = youtube.videos.list(params, (err, res) => {
    if (err) {
        console.error(err);
    }
    
    // console.log(`${res.data.items[0].id}\n${res.data.items[0].snippet.title}\n${res.data.items[0].snippet.channelTitle}\n${res.data.items[0].snippet.description}\n`);
    let result = {
        id: res.data.items[0].id,
        title: res.data.items[0].snippet.title,
        labels: [res.data.items[0].snippet.channelTitle],
        description: res.data.items[0].snippet.description
    }
    console.log(result);
})





