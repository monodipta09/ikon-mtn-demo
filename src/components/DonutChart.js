import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DonutChartComponent = ({ chartData, colorScheme }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Custom Labels on the left */}
      <div style={{ flex: 1, padding: '0 20px' }}>
        {chartData.map((entry, index) => (
          <div key={`label-${index}`} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: colorScheme[index % colorScheme.length],
                marginRight: '8px',
              }}
            ></div>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>
              {entry.name}: {entry.value}
            </span>
          </div>
        ))}
      </div>
      {/* Donut Chart on the right */}
      <div style={{ flex: 2 }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="80%"
              paddingAngle={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colorScheme[index % colorScheme.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DonutChartComponent;
