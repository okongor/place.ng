// components/Statistics.tsx
import React from 'react';

interface Statistic {
  title: string;
  value: number | string;
  description: string;
}

interface StatisticsProps {
  data: Statistic[];
}

const Statistics: React.FC<StatisticsProps> = ({ data }) => {
  return (
    <div className="statistics-container">
      {data.map((stat, index) => (
        <div key={index} className="statistic">
          <h3>{stat.title}</h3>
          <p className="value">{stat.value}</p>
          <p className="description">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
