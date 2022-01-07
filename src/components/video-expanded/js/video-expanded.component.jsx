import React, { useContext, useState } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import Context from '../../video-grid/context';
import VideoDescription from './video-description';
import '../scss/video-expanded.scss';

const VideoExpanded = () => {
    const { opened, setOpened } = useContext(Context);
    const [isVideoStopped, setVideoStopped] = useState(false);

    const _onClickClose = () => {
        setOpened(false);
        document.body.classList.remove('modal-opened');
        setVideoStopped(true);
    };

    return (
        <div className={`expanded-video-widget__wrapper ${opened ? 'opened' : 'closed'}`}>
            <div className='expanded-video-widget__main-container'>
                <div className='expanded-video-widget__header'>
                    <button
                        className='expanded-video-widget__close-button'
                        onClick={_onClickClose}>Закрыть</button>
                </div>
                <div className='expanded-video-widget__body'>
                    <VideoDescription />
                    <div className='expanded-video-widget__video-container'>
                        <Vimeo
                            video='19231868'
                            paused={isVideoStopped}
                            responsive={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoExpanded;
