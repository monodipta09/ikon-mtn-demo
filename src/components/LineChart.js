import React from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, LabelList } from 'recharts';

const LineChartComponent = ({ chartData, colorScheme }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        {/* Line for TotalRevenue */}
        <Line 
          type="monotone" 
          dataKey="TotalRevenue" 
          name="Total Revenue" 
          stroke={colorScheme[0]} 
          strokeWidth={3} 
          activeDot={{ r: 8 }}
        >
          <LabelList dataKey="TotalRevenue" position="top" />
        </Line>
        {/* Line for TotalOrder */}
        <Line 
          type="monotone" 
          dataKey="TotalOrder" 
          name="Total Order" 
          stroke={colorScheme[1]} 
          strokeWidth={3} 
        >
          <LabelList dataKey="TotalOrder" position="top" />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
