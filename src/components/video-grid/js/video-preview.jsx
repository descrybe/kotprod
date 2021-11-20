import React from 'react';

class VideoItem extends React.PureComponent {
    render() {
        return (
            <div>{this.props.video}</div>
        )
    }
}

export default VideoItem;
