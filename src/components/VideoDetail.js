import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
   // Outputs for if there is no search.
   if(!selectedVideo) {
      return null;
   }

   // Holds the YouTube URL and the video code.
   const videoSource = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

   return (
      <div>
         <div className="ui embed">
            <iframe src={videoSource} title='Video Player' allowFullScreen={true} />
         </div>
         <h3>{selectedVideo.snippet.title}</h3>
         <p><strong>{selectedVideo.snippet.channelTitle}</strong></p>
         <p>{selectedVideo.snippet.description}</p>
      </div>
   );
}

export default VideoDetail;