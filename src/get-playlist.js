const dotenv = require('dotenv').config()
const ypi = require('youtube-playlist-info')

var playlistId = 'PLroUsGOhJjhJB1sG1cZDDzDZOJs7rbeTd'
ypi(process.env.YOUTUBE_API_KEY, playlistId)
    .then(items => {
        console.log(JSON.stringify(items))
    })
    .catch(console.error)
