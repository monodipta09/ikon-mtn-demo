import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

// Reusable AppCard Component
const AppCard = ({ text, onPress, isSelected, icon }) => {
  return (
    <TouchableOpacity
      style={[
        styles.appCard,
        isSelected ? styles.selectedAppCard : null,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          <Image source={icon} style={styles.imageIcon} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.appText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appCard: {
    width: width * 0.214, // Adjusted for responsive design
    height: width * 0.25, // Proportional height for better layout
    borderRadius: 15,
    backgroundColor: '#FFF',
    justifyContent: 'space-evenly', // Ensures even spacing between icon and text
    alignItems: 'center',
    margin: 10,
    borderWidth: 0, // Subtle border for a sleek design
    borderColor: '#EDF1F5', // Neutral border color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    paddingVertical: 10,
  },
  selectedAppCard: {
    backgroundColor: '#FFCB05',
    borderColor: '#FFA000',
    elevation: 5,
    shadowColor: '#FFCB05',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackground: {
    width: width * 0.12, // Adjust size proportionally
    height: width * 0.12,
    backgroundColor: 'rgba(241, 241, 241, 0.5)',
    borderRadius: width * 0.06, // Ensures circular background
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  imageIcon: {
    width: '60%',
    height: '60%',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appText: {
    fontSize: width * 0.03,
    color: '#333', // Slightly darker color for better readability
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default AppCard;
