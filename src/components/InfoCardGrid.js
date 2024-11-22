import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoCard from './InfoCard'; // Adjust the import path as necessary

const InfoCardGrid = ({ cardData }) => {
  return (
    <View style={styles.grid}>
      {cardData.map((card, index) => (
        <View style={styles.gridItem} key={index}>
          <InfoCard
            baseColor={card.baseColor}
            cardName={card.cardName}
            cardValue={card.cardValue}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  gridItem: {
    width: '48%', // Each card takes ~half the width of the screen
    marginBottom: 0,
  },
});

export default InfoCardGrid;