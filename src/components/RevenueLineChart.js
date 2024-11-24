import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const RevenueLineChart = ({ data = { labels: [], datasets: [] } }) => {
  const [chartWidth, setChartWidth] = useState(Dimensions.get("window").width - 20);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setChartWidth(width-20); // Adjust for reduced padding/margin
  };

  return (
    <View style={styles.chartContainer} onLayout={handleLayout}>
      <Text style={styles.chartTitle}>Revenue</Text>
      <LineChart
        data={data}
        width={chartWidth}
        height={220}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default RevenueLineChart;
