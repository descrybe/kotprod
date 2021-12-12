import React from 'react';
import Context from '../../video-grid/context';
import { useContext } from 'react';
import '../scss/video-expanded.scss';

const videoInfos = [
    {
        title: 'Дата смерти',
        year: '2021',
        duration: '4 мин',
        role1: 'Цыцыков Виктор',
        role2: 'Новожилова Евдокия',
        role3: 'Галлиулин Рамиль',
        role4: 'Мезенцев Евгений',
        role5: 'Исаев Николай',
        role6: 'Цыцыков Виктор',
    }
];

const VideoExpanded = () => {
    const { opened, setOpened } = useContext(Context);

    const _onClickClose = () => {
        setOpened(false);
        document.body.classList.remove('modal-opened');
    }

    return (
        <div className={`expanded-video-widget__wrapper ${opened ? 'opened' : 'closed'}`}>
            <div className='expanded-video-widget__main-container'>
                <div className='expanded-video-widget__header'>
                    <button
                        className='expanded-video-widget__close-button'
                        onClick={_onClickClose}>Закрыть</button>
                </div>
                <div className='expanded-video-widget__body'>
                    <div className='expanded-video-widget__description'>
                        <ul className='expanded-video-widget__description-items'>
                            <li className='expanded-video-widget__description-item'>НАЗВАНИЕ: {videoInfos[0].title}</li>
                            <li className='expanded-video-widget__description-item'>ГОД: {videoInfos[0].year}</li>
                            <li className='expanded-video-widget__description-item'>ХРОНОМЕТРАЖ: {videoInfos[0].duration}</li>
                            <li className='expanded-video-widget__description-item'>РЕЖИССЁР, СЦЕНАРИСТ: {videoInfos[0].role1}</li>
                            <li className='expanded-video-widget__description-item'>ПОМОЩНИК РЕЖИССЁРА: {videoInfos[0].role2}</li>
                            <li className='expanded-video-widget__description-item'>ВИДЕООПЕРАТОР: {videoInfos[0].role3}</li>
                            <li className='expanded-video-widget__description-item'>ГАФФЕР: {videoInfos[0].role4}</li>
                            <li className='expanded-video-widget__description-item'>ЗВУКОРЕЖИССЁР: {videoInfos[0].role5}</li>
                            <li className='expanded-video-widget__description-item'>МОНТАЖ: {videoInfos[0].role6}</li>
                        </ul>
                    </div>
                    <div className='expanded-video-widget__video-container'></div>
                </div>
            </div>
        </div>
    )
}

export default VideoExpanded;
