import React from "react";
import "./CircularProgress.css";

function CircularProgress({ duration }) {
  const hours = parseInt(duration); // "40 hours" → 40
  const max = 40; // valeur max (tu peux ajuster selon ton dataset)
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progress = (hours / max) * circumference;

  return (
    <svg width="80" height="80" className="circular-progress">
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke="#e5e7eb"
        strokeWidth="8"
        fill="none"
      />
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke="#4F46E5"
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
      />
      <text
        x="40"
        y="45"
        textAnchor="middle"
        fontSize="14"
        fill="#111827"
        fontWeight="bold"
      >
        {hours}h
      </text>
    </svg>
  );
}
export default CircularProgress;
