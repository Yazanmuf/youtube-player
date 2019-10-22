import React from 'react'

const VideoDetail = ({ video }) => {

    return (
        <>
            <div className="card m-2" style={{ width: '40rem' }}>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="embedded video" class="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{video.snippet.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{video.snippet.description}</h6>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
            </div>

        </>
    )

}

export default VideoDetail;