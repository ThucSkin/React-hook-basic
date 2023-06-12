import './Blog.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';

const YoutubeSearch = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearchYoutube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyAe2PDAJ9EjbFtXfFPMsml1CQpN49MGFaw',
                'type': 'video',
                'q': query
            }
        })

        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object)
                })
            }

            setVideos(result)
        }

    }

    return (
        <div>thuc</div>
    )
}

export default YoutubeSearch;