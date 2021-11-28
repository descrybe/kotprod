import React from 'react';
import VideoCategoryList from './video-category-list'; 

import '../scss/video-grid.scss';

const categories = [
    {
        title: 'ФИЛЬМЫ',
        videos: [1, 2, 3],
    },
    {
        title: 'КОММЕРЦИЯ',
        videos: [1, 2, 3],
    },
    {
        title: 'КЛИПЫ',
        videos: [1, 2, 3],
    }
]

export default class VideoGrid extends React.PureComponent {
    render() {
        return (
            <div className='video-grid'>
                <VideoCategoryList categories={categories[0]}/>
                <hr />
                <VideoCategoryList categories={categories[1]}/>
                <hr />
                <VideoCategoryList categories={categories[2]}/>
            </div>
        )
    }
}