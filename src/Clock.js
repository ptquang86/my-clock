import React from "react";
import "./Clock.css";

function Clock(props) {
    const time = new Date(props.time);
    return <span className="clock">{`${time.getHours()} : ${time.getMinutes()}`}</span>;
}

export default Clock;
