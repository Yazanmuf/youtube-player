import React from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {

    state = {
        videoList: [],
        selectedVideo: null
    }

    handleSearch = async (term) => {
        console.log(term)
        const response = await youtube.get('/search',
            {
                params: {
                    q: term,
                    kind: 'video'
                }
            }
        );

        this.setState({ videoList: response.data.items })


    }

    handleSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {

        console.log(this.state.selectedVideo, 'video ID')

        return (

            <div className='container '>
                <h2 className='mt-3'>Youtube Searcher</h2>
                <SearchBar onSubmit={this.handleSearch} />
                {(this.state.selectedVideo)
                    ? <VideoDetail video={this.state.selectedVideo} />
                    : <div>Select a video to play</div>}

                <VideoList listOfVideos={this.state.videoList} onSelect={this.handleSelect} />
            </div>


        )
    }
}

export default App;