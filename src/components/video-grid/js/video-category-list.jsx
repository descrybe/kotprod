import React from 'react';
import VideoItem from './video-grid-item';

const VideoCategoryList = ({ category }) => {
    return (
        <div className='video-category'>
            <h3 className='video-category__title'>{category.title}</h3>
            <ul className='video-category__list'>
                {category.videos.map(video => {
                    return (
                        <VideoItem
                            key={Math.random() + 1}
                            videoInfo={video}
                        />
                    )
                })}
            </ul>
        </div >
    )
}

export default VideoCategoryList;
