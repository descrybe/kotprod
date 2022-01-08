import React, { useState } from 'react';
import Context from '../context';
import VideoExpanded from '../../video-expanded';
import VideoPreview from './video-grid-item-preview';

const VideoItem = ({ videoInfo }) => {
    const [opened, setOpened] = useState(false);

    return (
        <Context.Provider value={{ opened, setOpened }}>
            <li className='video-category__list-item'>
                <VideoPreview videoPreview={videoInfo.title} />
                <VideoExpanded videoId={videoInfo.videoId} />
            </li>
        </Context.Provider>
    )
}

export default VideoItem;
