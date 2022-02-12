import axios from 'axios';

const KEY = 'AIzaSyAxbmn2q3CuzXFZaI6B95JiVW4BvyhWLXk';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 10,
      key: KEY
   }
});