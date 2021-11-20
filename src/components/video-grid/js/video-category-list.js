import React from 'react';
import VideoItem from './video-item';

const VideoCategoryList = (props) => {
    
    return (
        <ul className='video-category__list'>
            {props.videos.map(v => {
                return (
                    <VideoItem
                        key={Math.random() * v} 
                        video={v} />
                )
            })}
        </ul>
    )
}

export default VideoCategoryList;
