import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {videos: [], selectedVideo: null}


    onFormSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    }

    onVideoSelected = video => {
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            videos={this.state.videos}
                            onVideoSelected = {this.onVideoSelected}  
                            />
                        </div>
                    </div>
                 </div>
            </div>
        )
    }

}

export default App;