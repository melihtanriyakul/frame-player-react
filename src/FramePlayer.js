import React, { Component } from 'react';
import './FramePlayer.css'

export default class FramePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: 0,
        }
        this.playing = false;
        this.columnIndexOfFrame = 0;
        this.rowIndexOfFrame = 0;
        this.timerID = "";
        this.play = this.play.bind(this);
        this.framePlayer = this.framePlayer.bind(this);
    }

    play() {
        if(this.playing) {
            clearInterval(this.timerID);
            this.playing = false;
        }
        else {
            this.timerID = setInterval( this.framePlayer, 200);
            this.playing = true;
        }
    }

    framePlayer() {
        let ctx = this.refs.canvas.getContext("2d");
        const canvasWidth = this.props.imageWidth;
        const canvasHeight = this.props.imageHeight;
        const widthPxOfFrame = canvasWidth / this.props.numOfFramesPerRow;
        const heightPxOfFrame = canvasHeight / this.props.numOfFramesPerColumn;
        const img = this.refs.image;

        ctx.drawImage(img, (widthPxOfFrame * this.columnIndexOfFrame), ( heightPxOfFrame * this.rowIndexOfFrame ) , widthPxOfFrame, heightPxOfFrame, 0, 0, this.props.canvasWidth, this.props.canvasHeight);
        this.columnIndexOfFrame++;
        if( this.rowIndexOfFrame === this.props.numOfFramesPerColumn ){
            this.setState({ imageIndex: this.state.imageIndex + 1})
            this.rowIndexOfFrame = 0;
            this.columnIndexOfFrame = 0;
        }
        else if( this.columnIndexOfFrame === this.props.numOfFramesPerRow ){
            this.columnIndexOfFrame = 0;
            this.rowIndexOfFrame++;
        }
        if( this.state.imageIndex > this.props.imageUrls.length - 1 ){
            clearInterval(this.timerID);
        }
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" onClick={this.play} width={this.props.canvasWidth} height={this.props.canvasHeight}></canvas>
                <img style={{display: "none"}}ref="image" src={this.props.imageUrls[this.state.imageIndex]} alt="Couldn't be loaded."></img>
            </div>
        )
    }
}