const {google} = require('googleapis')
const dotenv = require('dotenv').config()
const youtube = google.youtube('v3')

var playlistId = 'PLroUsGOhJjhJB1sG1cZDDzDZOJs7rbeTd'
const params = {
    //key: 'AIzaSyBk4Nm1vWAHT58Z_T-UNYtm6Xbr4_l_wf0',
    key: process.env.YOUTUBE_API_KEY,
    part: 'snippet',
    // fields: 'items(id, snippet(channelId,title,categoryId))',
    playlistId: playlistId,
    maxResult: 1
}
youtube.playlistItems.list(params, (err, res) =>{
    if (err) {
        console.error(err)
        throw err
    }
    console.log(JSON.stringify(res.data))
})
// youtube.playlistItems.list({
//     key: process.env.YOUTUBE_API_KEY,
//     part: 'id, snippet',
//     playlistId: playlistId,
//     maxResult: 10,
// }, (err, results) => {
//     console.log(err ? err.message : results.items[0].snippet)
// })