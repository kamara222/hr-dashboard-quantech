import React from 'react';
import { TrendingUp, ArrowUp } from 'lucide-react'; 
import MiniChart from './MiniChart';

const BigCard = ({ title, value, trendText, menCount, womenCount, chartColor }) => {
  const chartTrend = '+2%'; 
  
  return (
    <div className="big-card">
      <h3 className='text-dark-navy'>{title}</h3>
      <h2 className='text-dark-navy'>{value}</h2>
      
      <div className="chart-wrapper">
        <div className="chart-trend-indicator">
            <span className="chart-trend-value">{chartTrend}</span>
            <ArrowUp size={14} className='arrow-up-icon' />
        </div>
        <MiniChart color={chartColor} />
      </div>

      <div className="gender">
        <span>{menCount} Men</span>
        <span>{womenCount} Women</span>
      </div>

      <div className="growth">
        <span className="trend">
          {trendText}
        </span>
      </div>

    </div>
  );
};

export default BigCard;

