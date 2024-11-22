import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();
  const progress = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start buffering animation
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();

    // Navigate to Dashboard after a delay
    const timer = setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 5000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation, progress]);

  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={require('../../assets/loading-image.png')} style={styles.image} />

      {/* Loading Text */}
      <Text style={styles.loadingText}>
        Please wait while the application is loading...
      </Text>

      {/* Buffering Line */}
      <View style={styles.bufferingContainer}>
        <Animated.View style={[styles.bufferingLine, { transform: [{ translateX }] }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(31, 32, 36, 0.85)', // Updated background with opacity
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  bufferingContainer: {
    width: 200,
    height: 4, // Line thickness
    backgroundColor: '#333', // Background color of the buffering container
    overflow: 'hidden',
    borderRadius: 2,
  },
  bufferingLine: {
    width: 100,
    height: 4,
    backgroundColor: '#FFCB05', // Color of the moving line
    borderRadius: 2,
  },
});

export default LoadingScreen;
