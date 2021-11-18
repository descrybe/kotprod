import React from 'react';
import VideoCategoryList from './video-category-list'; 

import '../scss/video-grid.scss';

const videos1 = [1, 2, 3];
const videos2 = [1, 2, 3];
const videos3 = [1, 2, 3];

export default class VideoGrid extends React.PureComponent {
    render() {
        return (
            <div className='video-grid'>
                <VideoCategoryList videos={videos1}/>
                <hr />
                <VideoCategoryList videos={videos2}/>
                <hr />
                <VideoCategoryList videos={videos3}/>
            </div>
        )
    }
}