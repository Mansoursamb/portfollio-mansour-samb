import React from "react";
import "./CircularProgress.css";
import { useEffect, useState } from "react";
function CircularProgress({ completion }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progress = (completion / 100) * circumference;
    // animation progressive
    let start = circumference;
    const step = () => {
      start -= (start - (circumference - progress)) * 0.1;
      if (Math.abs(start - (circumference - progress)) < 1) {
        setOffset(circumference - progress);
      } else {
        setOffset(start);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [completion, circumference]);

  return (
    <svg width="100" height="100" className="circular-progress">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f1df3bff" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#e5e7eb"
        strokeWidth="10"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="url(#gradient)"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="16"
        fill="#111827"
        fontWeight="bold"
      >
        {completion}%
      </text>
    </svg>
  );
}

export default CircularProgress;
