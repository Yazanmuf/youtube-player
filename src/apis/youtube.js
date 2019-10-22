import axios from 'axios'

const KEY = 'AIzaSyAQdqe1kV7HZBHWeRLO_6o_HI48qbL5XbQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
}

);