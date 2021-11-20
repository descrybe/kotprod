import React from 'react';
import '../scss/video-expanded.scss';

const VideoExpanded = ({ opened }) => {
    return (
        <div className={`expanded-video-widget__wrapper ${opened ? 'opened' : 'closed'}`}>
            <div className='expanded-video-widget__main-container'>
                <div className='expanded-video-widget__header'>
                    <button className='expanded-video-widget__close-button'>Закрыть</button>
                </div>
                <div className='expanded-video-widget__body'>
                    <div className='expanded-video-widget__description'></div>
                    <div className='expanded-video-widget__video-container'></div>
                </div>
            </div>
        </div>
    )
}

export default VideoExpanded;
