import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const lightenColor = (hex, percent) => {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.floor((num >> 16) * (1 + percent / 100)));
  const g = Math.min(255, Math.floor(((num >> 8) & 0x00ff) * (1 + percent / 100)));
  const b = Math.min(255, Math.floor((num & 0x0000ff) * (1 + percent / 100)));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

const InfoCard = ({ baseColor = '#FFD700', cardName = 'Subscribers', cardValue = '0' }) => {
  const lighterColor = lightenColor(baseColor, 20); // Increase brightness by 20%

  return (
    <View style={[styles.card, { backgroundColor: baseColor }]}>
      {/* Lighter corner overlay */}
      <LinearGradient
        colors={[lighterColor, baseColor]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.corner}
      />
      <Text style={styles.value}>{cardValue}</Text>
      <Text style={styles.name}>{cardName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left
    width: '100%', // Take the full width of the parent grid
    height: 100, // Set consistent height for the cards
    position: 'relative',
    overflow: 'hidden',
  },
  corner: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '50%',
    borderTopRightRadius: 10,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
});

export default InfoCard;