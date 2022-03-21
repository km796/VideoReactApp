import React from "react"

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
<<<<<<< HEAD

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc} />

        </div>
=======
    return (
>>>>>>> 62498c9c65d2c3428343da2e9d51fa60f6f4d1f3
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> 62498c9c65d2c3428343da2e9d51fa60f6f4d1f3
    );
};

export default VideoDetail;