import React from "react";
import onlineIcon from "../../Icons/onlineIcon.png";
import closeIcon from "../../Icons/closeIcon.png";
import "./InfoBar.css";

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onLineIcon" src={onlineIcon} alt="onlineImage" />
                <h3 className="room">Chat On ( {room} )</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="byeImage" /></a>
            </div>
        </div>
    )

}

export default InfoBar;