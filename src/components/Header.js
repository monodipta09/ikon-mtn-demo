import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>IKON Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { padding: 20, backgroundColor: '#f4f4f4', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default Header;
