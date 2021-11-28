import React from 'react';
import VideoItem from './video-item';

const VideoCategoryList = ({ categories }) => {    
    return (
        <div className='video-category'>
            <h2 className='video-category__title'>{categories.title}</h2>
            <ul className='video-category__list'>
                {categories.videos.map(v => {
                    return (
                        <VideoItem
                            key={Math.random() * v} 
                            video={v} />
                    )
                })}
            </ul>
        </div>
    )
}

export default VideoCategoryList;
