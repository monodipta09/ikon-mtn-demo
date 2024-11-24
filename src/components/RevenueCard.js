import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DonutChart from "./DonutChart";

const RevenueCard = () => {
  const totalRevenue = 500_000_000;
  const deducted = 30_000_000;
  const profit = totalRevenue - deducted;

  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Total Revenue</Text>
        <Text style={styles.revenueValue}>{totalRevenue.toLocaleString()}</Text>
        <Text style={styles.subTitle}>Total Revenue</Text>

        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: "#F2C94C" }]} />
            <Text style={styles.legendText}>Deducted</Text>
            <Text style={styles.legendValue}>{deducted.toLocaleString()}</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: "#6A4CCD" }]} />
            <Text style={styles.legendText}>Profit</Text>
            <Text style={styles.legendValue}>{profit.toLocaleString()}</Text>
          </View>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Text style={styles.detailLink}>Detail &gt;</Text>
        </TouchableOpacity>
        <DonutChart />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  leftContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  revenueValue: {
    fontSize: 30,
    fontWeight: "700",
    color: "#6A4CCD",
    marginVertical: 5,
  },
  subTitle: {
    fontSize: 14,
    color: "#666",
  },
  legendContainer: {
    marginTop: 15,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: "#000",
    flex: 1,
  },
  legendValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  rightContainer: {
    alignItems: "center",
  },
  detailLink: {
    color: "#6A4CCD",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
});

export default RevenueCard;
