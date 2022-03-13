import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
    state = {videos: []}

    onVideoSelected = (video) => {
        console.log(video)
    }

    onFormSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <VideoList videos={this.state.videos}
                 onVideoSelected = {this.onVideoSelected}/>
            </div>
        )
    }

}

export default App;