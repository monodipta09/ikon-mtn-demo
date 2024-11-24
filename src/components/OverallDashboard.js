import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import RevenueLineChart from "./RevenueLineChart";
import RevenueCard from "./RevenueCard";
import GrowthComponent from "./GrowthComponent";

const Dashboard = () => {
  const revenueChartData = {
    labels: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    datasets: [
      {
        data: [300, 450, 100, 583.493, 400, 200],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
      {
        data: [200, 300, 450, 400, 300, 250],
        color: (opacity = 1) => `rgba(244, 114, 65, ${opacity})`,
      },
    ],
    legend: ["Total Revenue", "Total Order"],
  };

  {
    /* GrowthChart Data*/
  }
  const growthChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [10, 20, 15, 30, 25, 40, 50],
        color: (opacity = 1) => `rgba(255, 193, 7, ${opacity})`,
        strokeWidth: 2, // Optional
      },
    ],
  };

  const totalSubscribers = "15,627.80";
  const growth = "100.30";

  return (
    <ScrollView style={styles.container}>
    
      {/* Revenue Chart */}
      <View style={styles.chartContainer}>
        <RevenueLineChart data={revenueChartData} />
      </View>

      {/* Total Revenue */}
      <View style={styles.revenueCard}>
        <RevenueCard />
      </View>

      {/* Subscribers Section */}
      <View style={styles.subscribersCard}>
        <GrowthComponent
          chartData={growthChartData}
          totalSubscribers={totalSubscribers}
          growth={growth}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    fontSize: 14,
  },
  activeTab: {
    backgroundColor: "#fbbd08",
    color: "white",
  },
  kpiContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  kpiCard: {
    width: "48%",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  kpiValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  kpiLabel: {
    fontSize: 14,
    color: "#ffffff",
  },
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
  revenueCard: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginVertical: 10,
  },
  revenueTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  revenueValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  pieChart: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  subscribersCard: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 10,
  },
  subscribersTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subscribersValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subscribersGrowth: {
    fontSize: 16,
    color: "green",
  },
});

export default Dashboard;
