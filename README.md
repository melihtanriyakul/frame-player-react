# frame-player-react

This is a react component that plays frames inside given images within a 'canvas'.  
You can give image urls, their widths and height, number of frames per row and column and canvas' width and height as props to the component.

## Example GIF

![](frame-player.gif)

### Props
  - **imageUrls** 		-> You can add your image urls by using this prop.
  - **imageWidht**		-> You can designate the width of your image by using this prop.
  - **imageHeight**		-> You can designate the height of your image by using this prop.
  - **numOfFramesPerRow** 	-> You can set the number of frames per row by using this prop.
  - **numOfFramesPerColumn** 	-> You can set the number of frames per column by using this prop.
  - **canvasWidth** 		-> You can designate the width of your canvas by using this prop.
  - **canvasHeight**		-> You can designate the height of your canvas by using this prop.
  
## Usage

```
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
```



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
