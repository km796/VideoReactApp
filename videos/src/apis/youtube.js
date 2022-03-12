import axios from 'axios';


const KEY = 'AIzaSyBtwCqWEqDa7ldRzWPvlkUu-F9HTvoC57k'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})