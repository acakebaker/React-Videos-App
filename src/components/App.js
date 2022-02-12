import './App.css';

import React from 'react';
import SearchBar from './SearchBar';
import YouTube from  '../apis/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
   state = { videos: [], selectedVideo: null };

   // Gets the data from Youtube.
   onTermSubmit = async (term) => {
      const response = await YouTube.get('/search', {
         params: {
            q: term
         }
      });

      this.setState({ 
         videos: response.data.items,
         selectedVideo: response.data.items[0]
      });
   };

   // Gets the selected video data and puts it in the selectedVideo state.
   onVideoSelect = (video) => this.setState({ selectedVideo: video });

   render() {
      return (
         <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <div className="ui grid">
               <div className="ui row">
                  <div className="eleven wide column">
                     <VideoDetail selectedVideo={this.state.selectedVideo} />
                  </div>
                  <div className="five wide column">
                     <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                  </div>
               </div>
            </div>
         </div>
      );
   };
}

export default App;

