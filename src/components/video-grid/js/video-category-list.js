import React from 'react';
import VideoItem from './video-item';

const VideoCategoryList = ({ videos }) => {

    return (
        <ul className='video-category__list'>
            {videos.map(v => {
                return (
                    <VideoItem key={Math.random() * v} video={v} />
                )
            })}
        </ul>
    )
}

export default VideoCategoryList;
