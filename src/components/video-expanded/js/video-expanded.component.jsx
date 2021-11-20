import React from 'react';

const VideoExpanded = ({ opened }) => {
    return (
        <div className={`video-expanded ${opened ? opened : ''}`}>
            <span>ss</span>
        </div>
    )
}

export default VideoExpanded;
