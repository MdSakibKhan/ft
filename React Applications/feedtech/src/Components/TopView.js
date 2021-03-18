import React, { Component } from 'react';
import "../CSS/top.css"
import toppic from "../Images/topimage.jpg"

class TopView extends Component {
    render() {
        return (
            <div className="grid-container" id = "TopScreen">
                <img src={toppic} className = "w-100" alt="Bangladesh"></img>
                    <div className="content" id = "toptext">
                    <text className = "h1">FeedTech Automation</text>
                    </div>
            </div>   
        );
    }
}

export default TopView;