import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChartCardComponent = ({ header, children, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.header}>{header}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: 16, // Gap on both left and right
    width: '90%', // Ensures the card does not stretch too much on larger screens
    maxWidth: '90%',
    alignSelf: 'center', // Centers the card horizontally
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ChartCardComponent;
