import React, { useContext } from 'react';
import Context from '../context';

const VideoPreview = ({ videoPreview }) => {
    const { setOpened } = useContext(Context);

    const _expandVideoOnClick = () => {
        setOpened(true);
        document.body.classList.add('modal-opened');
    }

    return (
        <div className='video-preview__wrapper' onClick={_expandVideoOnClick}>{videoPreview}</div>
    )
}

export default VideoPreview;
