import React, { Component } from 'react';
import FramePlayer from './FramePlayer';

class App extends Component {
  render() {
    let imageUrls = [
      "http://storage.googleapis.com/alyo/assignments/images/0.jpg",
      "http://storage.googleapis.com/alyo/assignments/images/1.jpg",
      "http://storage.googleapis.com/alyo/assignments/images/2.jpg",
      "http://storage.googleapis.com/alyo/assignments/images/3.jpg",
      "http://storage.googleapis.com/alyo/assignments/images/4.jpg",
      "http://storage.googleapis.com/alyo/assignments/images/5.jpg",
      "http://storage.googleapis.com/alyo/assignments/images/6.jpg",
    ];
    return (
      <div>
        <FramePlayer
          imageUrls={imageUrls}
          imageWidth={640}
          imageHeight={360}
          numOfFramesPerRow={5}
          numOfFramesPerColumn={5}
          canvasWidth={640}
          canvasHeight={360}
        />
      </div>
    );
  }
}

export default App;
