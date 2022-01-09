import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

const VideoReelsPreview = () => {
    console.log(window.innerWidth/window.innerHeight)
    return (
        <div className='video-reels-preview'>
            <Vimeo
                video='660423614'
                muted={true}
                loop={true}
                autoplay
                background={true}
                height={'100%'}
            />
        </div>
    )
}

export default VideoReelsPreview;
