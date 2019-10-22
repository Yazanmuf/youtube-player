import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ listOfVideos, onSelect }) => {

    const renderedList = listOfVideos.map(video => (
        <VideoItem key={video.etag} data={video} onSelect={onSelect}></VideoItem>)
    )


    return (
        <div className='mt-3'>{renderedList}</div>
    )

}
export default VideoList;