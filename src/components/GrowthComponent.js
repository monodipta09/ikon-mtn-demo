import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons";

const GrowthComponent = ({ chartData, totalSubscribers, growth }) => {
  const [chartWidth, setChartWidth] = useState(Dimensions.get("window").width - 40);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setChartWidth(width - 40); // Adjust for padding/margin
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="people-outline" size={24} color="#fff" />
        </View>
        <Text style={styles.title}>MTN Total Subscribers</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#000" />
      </View>

      {/* Details Section */}
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Total Subscribers</Text>
          <Text style={styles.detailValue}>₹ {totalSubscribers}</Text>
          <View style={styles.growth}>
            <Ionicons name="arrow-up" size={16} color="green" />
          </View>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Growth</Text>
          <Text style={styles.detailValue}>₹ {growth}</Text>
          <View style={styles.growth}>
            <Ionicons name="arrow-up" size={16} color="green" />
          </View>
        </View>
      </View>

      {/* Growth Chart */}
      <LineChart
        data={chartData}
        width={chartWidth}
        height={150}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#ffc107",
          },
        }}
        style={styles.chart}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    elevation: 2, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ffc107",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
    marginLeft: 10,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailItem: {
    flex: 1,
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 14,
    color: "#555",
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  growth: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  chart: {
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    paddingBottom: 10,
  },
});

export default GrowthComponent;
