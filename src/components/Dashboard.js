import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Chart from './Chart1';

const dummyData = [
  { label: 'Jan', value: 300 },
  { label: 'Feb', value: 400 },
  { label: 'Mar', value: 500 },
];

const DashboardScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Dashboard</Text>
    <Chart data={dummyData} />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default DashboardScreen;
