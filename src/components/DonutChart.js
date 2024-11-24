import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Circle, G, Text as SVGText, Svg } from "react-native-svg";

const DonutChart = () => {
  const radius = 50;
  const strokeWidth = 20;
  const circumference = 2 * Math.PI * radius;
  const deductedPercentage = 25; // 25% deducted
  const deductedStroke = (deductedPercentage / 100) * circumference;
  const profitStroke = circumference - deductedStroke;

  return (
    <Svg width={120} height={120}>
      <G rotation="-90" origin="60, 60">
        {/* Deducted Segment */}
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#F2C94C"
          strokeWidth={strokeWidth}
          strokeDasharray={`${deductedStroke} ${circumference}`}
          fill="transparent"
        />
        {/* Profit Segment */}
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#6A4CCD"
          strokeWidth={strokeWidth}
          strokeDasharray={`${profitStroke} ${circumference}`}
          strokeDashoffset={-deductedStroke}
          fill="transparent"
        />
      </G>
      <SVGText
        x="60"
        y="60"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="14"
        fill="#000"
      >
        75%
      </SVGText>
    </Svg>
  );
};

export default DonutChart;
