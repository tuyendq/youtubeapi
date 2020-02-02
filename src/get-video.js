'use strict';

const dotenv = require('dotenv').config();
const {google} = require('googleapis');

const youtube = google.youtube({
    version: 'v3'
});

// var videoId = 'Ks-_Mh1QhMc';
var videoId = process.argv[2] || 'Ks-_Mh1QhMc';
console.log(`Get video info: ${videoId}`);

const params = {
    key: process.env.YOUTUBE_API_KEY,
    part: 'snippet',
    id: videoId
};

var object = {};
// youtube.videos.list(params, function (err, res) {
//         if (err) {
//             console.error(err);
//         }
//         console.log(`Result: ${res}`);
//         object = res.data.items;
// });
const videoInfo = youtube.videos.list(params, (err, res) => {
    if (err) {
        console.log(`Error occured:\n`);
        console.error(err);
    }
    console.log(`Result: ${JSON.stringify(res.data.items[0])}`);
    object = res.data.items[0];
});

(async function getVideoInfo() {
    console.log(`---Begin: ${JSON.stringify(object)}`);
    await sleep(3000);
    console.log(`---/After: ${JSON.stringify(object)}`);
})();


// var printResult = async function () {
//     await sleep(1000);
//     console.log(object);
// };

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}