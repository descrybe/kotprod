import React from 'react';
import VideoExpanded from '../../video-expanded';
import VideoPreview from './video-preview';

class VideoItem extends React.Component {
    constructor() {
        super();
        
        this.state = {
            expanded: false,
        }
    }

    _expandVideoOnClick = () => {
        this.setState({
            expanded: true,
        });

        document.body.classList.add('modal-opened');
    }

    _onCloseButtonClick = () => {
        this.setState({
            expanded: true,
        });

        document.body.classList.remove('modal-opened');
    }

    render() {
        return (
            <li className='video-category__list-item'
                onClick={this._expandVideoOnClick}>
                <VideoPreview 
                    video={this.props.video}/>
                <VideoExpanded opened={this.state.expanded}/>
            </li>
        )
    }
}

export default VideoItem;
