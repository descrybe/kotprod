import React, { useContext } from 'react';
import Context from '../context';

const VideoPreview = ({ video }) => {
    const { setOpened } = useContext(Context);

    const _expandVideoOnClick = () => {
        setOpened(true);
        document.body.classList.add('modal-opened');
    }

    return (
        <div className='video-preview__wrapper' onClick={_expandVideoOnClick}>{video}</div>
    )
}

export default VideoPreview;
