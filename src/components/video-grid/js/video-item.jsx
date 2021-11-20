import React from 'react';
import VideoExpanded from '../../video-expanded';

class VideoItem extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            expanded: false,
        }
    }

    _expandVideoOnClick() {
        this.setState({
            expanded: true,
        });
    }

    render() {
        return (
            <li className='video-category__list-item'>
                <div onClick={this._expandVideoOnClick}>{this.props.video}</div>
                <VideoExpanded />
            </li>
        )
    }
}

export default VideoItem;
