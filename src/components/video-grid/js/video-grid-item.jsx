import React, { useState } from 'react';
import Context from '../context';
import VideoExpanded from '../../video-expanded';
import VideoPreview from './video-grid-item-preview';

const VideoItem = ({ video }) => {
    const [opened, setOpened] = useState(false);

    return (
        <Context.Provider value={{ opened, setOpened }}>
            <li className='video-category__list-item'>
                <VideoPreview video={video}/>
                <VideoExpanded />
            </li>
        </Context.Provider>
    )
}

export default VideoItem;
