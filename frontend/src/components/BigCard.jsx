import React from 'react';
import { TrendingUp } from 'lucide-react';
import MiniChart from './MiniChart';

const BigCard = ({ title, value, trendText, menCount, womenCount, chartColor }) => {
  return (
    <div className="big-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
      <div className="growth">
        <span className="trend">
          <TrendingUp size={14} />
          {trendText}
        </span>
      </div>
      <div className="gender">
        <span>{menCount} Men</span>
        <span>{womenCount} Women</span>
      </div>
      <MiniChart color={chartColor} />
    </div>
  );
};

export default BigCard;