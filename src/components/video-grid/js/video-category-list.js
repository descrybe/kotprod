import React from 'react';

const VideoCategoryList = ({ videos }) => {
    return (
        <ul className='video-category__list'>
            {videos.map(v => {
                return (
                    <li className='video-category__list-item'>{v}</li>
                )
            })}
        </ul>
    )
}

export default VideoCategoryList;
