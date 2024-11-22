import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Chart from '../components/Chart';
import dummyData from '../utils/dummyData';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* First Fragment: Welcome Message */}
      <View style={styles.fragment}>
        <Text style={styles.welcomeTitle}>Welcome to the Dashboard!</Text>
        <Text style={styles.welcomeText}>
          Here you can view your business insights and analyze key metrics.
        </Text>
      </View>

      {/* Second Fragment: First Dashboard Placeholder */}
      <View style={styles.fragment}>
        <Text style={styles.title}>Dashboard</Text>
        <Chart data={dummyData} />
      </View>

      {/* Third Fragment: Second Dashboard Placeholder */}
      <View style={styles.fragment}>
        <Text style={styles.dashboardTitle}>Dashboard 2</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.placeholderText}>Chart for Dashboard 2</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  fragment: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#555',
  },
  dashboardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  chartPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: '#777',
  },
});

export default DashboardScreen;