import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

const VideoReelsPreview = () => {
    const ratio = window.innerWidth / window.innerHeight;
    const containerStyles = {
        height: `${ratio * 56.25}vh`
    };

    return (
        <div className='video-reels-preview' style={containerStyles}>
            <Vimeo
                video='660423614'
                muted={true}
                loop={true}
                autoplay
                background={true}
                height={'100%'}
                width={'100%'}
            />
        </div>
    )
}

export default VideoReelsPreview;
