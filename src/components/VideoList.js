import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
    constructor(props) {
        super(props);

        // let onVideoSelect = this.props.onVideoSelect;
        //console.log(this.props);

        // this.onVideoSelect = this.props.onVideoSelect.bind(this);
        // console.log(this.onVideoSelect);
    }

    render() {

        let videoItems = this.props.videos.map((video) => {
            return (
                <VideoListItem
                    onVideoSelect={this.props.onVideoSelect}
                    key={video.etag}
                    video={video} />
            );
        });

        return (
            <ul className="col-md-4 col-sm-12 list-group">
                {videoItems}
            </ul>
        );
    };
}

module.exports = VideoList;
