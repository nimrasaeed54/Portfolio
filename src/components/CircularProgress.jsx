import React, { useEffect, useRef } from "react";

const CircularProgress = ({ percentage, label, color }) => {
  const circleRef = useRef(null);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Calculate the final stroke dash offset
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Animation for the stroke-dashoffset
  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = circumference; // Start at full circumference
      setTimeout(() => {
        circleRef.current.style.transition = "stroke-dashoffset 1.5s ease"; // Apply the transition after the initial render
        circleRef.current.style.strokeDashoffset = strokeDashoffset; // Animate to final value
      }, 100);
    }
  }, [percentage]);

  return (
    <div className="skill">
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
        {/* Background Circle */}
        <circle cx="60" cy="60" r={radius} stroke="#e6e6e6" strokeWidth="10" fill="none" />

        {/* Foreground Circle (Progress Circle) */}
        <circle
          ref={circleRef}
          cx="60"
          cy="60"
          r={radius}
          stroke={color || "#4db8ff"}  // Default to blue color if not passed
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}  // Start with full circumference
          transform="rotate(-90 60 60)" // Rotate to start from top
        />

        {/* Text in the Center */}
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="20" fill="#f3f3f3">
          {percentage}%
        </text>
      </svg>
      <p className="text-center">{label}</p>
    </div>
  );
};

export default CircularProgress;
