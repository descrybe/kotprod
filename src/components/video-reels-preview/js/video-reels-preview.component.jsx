import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

const VideoReelsPreview = () => {
    const ratio = window.innerWidth / window.innerHeight;
    const topPadding = `-${275 / ratio}px`;

    return (
        <div className='video-reels-preview' style={{ top: topPadding }}>
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
