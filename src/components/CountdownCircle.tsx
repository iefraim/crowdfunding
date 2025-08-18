import React from "react";

interface CountdownCircleProps {
    time: number; // current time remaining
    totaltime: number; // total countdown time
    color?: string; // color of the progress circle
    dimension?:string;
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({
    time,
    totaltime,
    color = "#3498db",
    dimension
}) => {
    const size = 80;
    const strokeWidth = 6; // width of the circle stroke
    const radius = (size - strokeWidth) / 2; // radius of the circle
    const circumference = 2 * Math.PI * radius;
    const progress = Math.max(0, Math.min(1, time / totaltime));
    const offset = circumference * (1 - progress);

    return (
        <div style={{ width: size, height: size, position: "relative", display: "inline-block" }}>
            <svg width={size} height={size}>
    
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s linear" }}
                />
            </svg>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: size,
                    height: size,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: size * 0.3,
                    fontWeight: "bold",
                    color: "#333",
                    userSelect: "none",
                }}
            >
    <div className="time-wrapper">
      <div className="time">   {Math.ceil(time)}</div>
      <div className="words">{dimension}</div>
    </div>
            </div>
        </div>
    );
}; 

export default CountdownCircle;