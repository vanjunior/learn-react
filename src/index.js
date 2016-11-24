import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY_YOUTUBE = 'AIzaSyA5ylinKabLeuwifz8ac3EWF7P3dpGRCJs';

// class Componnents
class App extends React.Component {
    constructor(props) {
        super(props);

        this.selectedVideo = this.selectedVideo.bind(this);
        this.videoSearch = this.videoSearch;

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('badminton');
    }

    selectedVideo(selectedVideo) {
        this.setState({ selectedVideo });
    }

    videoSearch(term) {
        YTSearch({key: API_KEY_YOUTUBE, term: term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

        return (
            <div className="container-fluid">
                <SearchBar onSearchTermChange={videoSearch}
                    placeholder="Searching in Youtube..." />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={this.selectedVideo}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
