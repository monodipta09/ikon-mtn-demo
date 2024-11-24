import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { otpApi } from '../utils/api';
import FastImage from 'react-native-fast-image';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(120); // Timer: 2 minutes in seconds
  const [isResendActive, setIsResendActive] = useState(false); // State to track resend button

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsResendActive(true);
      return;
    }
    setIsResendActive(false);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleOtpSubmit = async () => {
    try {
      const isvalidated = await otpApi(otp);
      if (isvalidated) {
        navigation.navigate('Loading'); // Navigate to the Loading Screen
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error validating OTP:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleResendCode = () => {
    setTimeLeft(120); // Reset the timer
    setIsResendActive(false);
    alert('Resend code sent'); // Replace with actual resend logic
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Image
      style={styles.icon}
      source={require('../../assets/mailPic.gif')} // Ensure this path is correct in your project structure
      resizeMode={FastImage.resizeMode.contain} // Use FastImage's resizeMode prop
    />

      <Text style={styles.title}>Enter confirmation code</Text>
      <Text style={styles.subtitle}>A code was sent</Text>
      <Text style={styles.timerText}>The code will expire after {formatTime(timeLeft)}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="text"
          value={otp}
          onChangeText={setOtp}
        />
        <Text
          style={[
            styles.tick,
            otp.length === 12 ? styles.continueDisplayTick : styles.continueHideTick,
          ]}
        >
          ✔
        </Text>
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendTitle}>Didn’t receive the code yet?</Text>
        <TouchableOpacity onPress={handleResendCode} disabled={!isResendActive}>
          <Text
            style={[
              styles.resendCode,
              isResendActive ? styles.resendCodeActive : styles.resendCodeDisabled,
            ]}
          >
            Resend code
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          otp.length === 12 ? styles.continueButtonEnabled : styles.continueButtonDisabled,
        ]}
        onPress={handleOtpSubmit}
        disabled={otp.length !== 12}
      >
        <Text
          style={[
            styles.continueText,
            otp.length === 12 ? styles.continueTextEnabled : styles.continueTextDisabled,
          ]}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFCB05', // Full page background color
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  icon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Black text
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#7E7E7E',
    textAlign: 'center',
    marginBottom: 30,
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 25, // Rounded edges
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#fff', // White background for better contrast
  },
  tick: {
    position: 'absolute',
    right: 20, // Position the tick mark to the extreme right inside the input
    top: 12, // Vertically align the tick with the input text
    fontSize: 18,
  },
  continueDisplayTick: {
    color: '#000',
  },
  continueHideTick: {
    color: 'transparent',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Ensures vertical alignment
    marginTop: 60,
    marginBottom: 10,
  },
  resendTitle: {
    fontSize: 14,
    color: '#000',
  },
  resendCode: {
    fontSize: 14,
    marginLeft: 5,
  },
  resendCodeActive: {
    color: '#007AFF',
  },
  resendCodeDisabled: {
    color: 'rgba(0, 0, 0, 0.5)', // Disabled color with transparency
  },
  continueButton: {
    padding: 15,
    borderRadius: 25, // Rounded edges
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Light blurry effect
  },
  continueButtonEnabled: {
    backgroundColor: '#000', // Black background for active button
  },
  continueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueTextDisabled: {
    color: '#000', // Black text for disabled button
  },
  continueTextEnabled: {
    color: '#fff', // White text for enabled button
  },
});

export default OtpScreen;
