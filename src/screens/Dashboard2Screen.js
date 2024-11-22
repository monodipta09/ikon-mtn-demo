import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Chart1 from '../components/Chart1';
import Chart2 from '../components/Chart2';
import Chart3 from '../components/Chart3';
import dummyData from '../utils/dummyData';
import dataPlans from '../utils/LowerBlock2Chart';
import Chart3Data from '../utils/Chart3Data';

const Dashboard2Screen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.fragment}>
        <Text style={styles.title}>Column Chart</Text>
        <Chart1 data={dummyData} type="column" />
      </View>
      <View style={styles.fragment}>
        <Text style={styles.title}>Line Chart - Data Plan Usage</Text>
        <Chart2 data={dataPlans} type="line" />
      </View>
      <View style={styles.fragment}>
        <Text style={styles.title}>Line Chart - Data Plan Usage</Text>
        <Chart3 data={Chart3Data} type="line" />
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
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default Dashboard2Screen;
