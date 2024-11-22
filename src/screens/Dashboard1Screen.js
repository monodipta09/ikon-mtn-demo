import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import d1c1Data from '../utils/d1c1Data';
import D1Chart1 from '../components/D1Chart1';

const Dashboard1Screen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.fragment}>
        <Text style={styles.title}>Minutes vs Revenue (Horizontal Bar Chart)</Text>
        <D1Chart1 data={d1c1Data} />
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


export default Dashboard1Screen;
