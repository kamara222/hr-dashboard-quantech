import React from 'react';

const MiniChart = ({ color }) => {
  return (
    <svg width="120" height="50" viewBox="0 0 120 50" style={{ marginTop: '10px' }}>
      <path
        d="M0,35 Q30,28 60,32 T120,22"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        opacity="0.7"
      />
    </svg>
  );
};

export default MiniChart;