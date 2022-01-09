import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

const VideoReelsPreview = () => {
    return (
        <div className='video-reels-preview'>
            <Vimeo
                video='660423614'
                muted={true}
                loop={true}
                autoplay
                background={true}
            />
        </div>
    )
}

export default VideoReelsPreview;
