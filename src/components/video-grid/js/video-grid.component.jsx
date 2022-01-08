import React from 'react';
import VideoCategoryList from './video-category-list.jsx';

import '../scss/video-grid.scss';

const categories = [
    {
        title: 'ФИЛЬМЫ',
        videos: [
            {
                title: 'faculty',
                preview: 1,
                videoId: '660425148'
            },
            {
                title: 'na zdorovie',
                preview: 2,
                videoId: '660425557'
            },
            {
                title: 'headphones',
                preview: 3,
                videoId: '660425200'
            },
        ],
    },
    {
        title: 'КОММЕРЦИЯ',
        videos: [
            {
                title: 'cover band',
                preview: 1,
                videoId: '660426713'
            },
            {
                title: 'basement',
                preview: 2,
                videoId: '660425786'
            },
            {
                title: 'snippet',
                preview: 3,
                videoId: '660425714'
            },
        ],
    },
    {
        title: 'КЛИПЫ',
        videos: [
            {
                title: 'borjomi',
                preview: 1,
                videoId: '660425653'
            },
            {
                title: 'movie trailer obsession',
                preview: 2,
                videoId: '660424649'
            },
            {
                title: 'date of death',
                preview: 3,
                videoId: '658656500'
            },
        ],
    }
]

export default class VideoGrid extends React.PureComponent {
    render() {
        return (
            <div className='video-grid'>
                <VideoCategoryList category={categories[0]}/>
                <hr />
                <VideoCategoryList category={categories[1]}/>
                <hr />
                <VideoCategoryList category={categories[2]}/>
            </div>
        )
    }
}