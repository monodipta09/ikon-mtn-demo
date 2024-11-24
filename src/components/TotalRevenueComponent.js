import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const TotalRevenueComponent = () => {
  const screenWidth = Dimensions.get("window").width;

  const progressChartData = {
    labels: ["Deducted", "Profit"],
    data: [0.25, 0.75],
    colors: ["#F5A623", "#764AF1"], // Yellow and Purple
  };

  return (
    <View style={styles.container}>
      {/* Left Side: Revenue Details */}
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Total Revenue</Text>
        <Text style={styles.revenueValue}>500,000,000</Text>
        <Text style={styles.subTitle}>Total Revenue</Text>
        <View style={styles.detailRow}>
          <View style={[styles.dot, { backgroundColor: "#764AF1" }]} />
          <Text style={styles.detailLabel}>Deducted</Text>
          <Text style={[styles.detailValue, { color: "#F5A623" }]}>
            30,000,000
          </Text>
        </View>
        <View style={styles.detailRow}>
          <View style={[styles.dot, { backgroundColor: "#764AF1" }]} />
          <Text style={styles.detailLabel}>Profit</Text>
          <Text style={[styles.detailValue, { color: "#764AF1" }]}>
            480,000,000
          </Text>
        </View>
      </View>

      {/* Right Side: Donut Chart */}
      <View style={styles.rightContainer}>
        <ProgressChart
          data={progressChartData}
          width={150}
          height={150}
          strokeWidth={12}
          radius={32}
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1, index) =>
              progressChartData.colors[index] || `rgba(0, 0, 0, ${opacity})`,
            labelColor: () => `rgba(0, 0, 0, 0)`,
          }}
          hideLegend={true}
        />
        <Text style={styles.detailLink}>Detail </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  leftContainer: {
    flex: 2,
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  revenueValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#764AF1",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: "#333333",
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  detailLink: {
    fontSize: 14,
    color: "#764AF1",
    marginTop: 10,
  },
});

export default TotalRevenueComponent;
