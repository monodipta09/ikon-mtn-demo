import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Otp = ({ handleOtpSubmit, resendCode }) => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/otp_mail.png')} // Replace with your mail icon URI
        style={styles.icon}
      />
      <Text style={styles.title}>Enter confirmation code</Text>
      {/* <Text style={styles.subtitle}>
        A code was sent to <Text style={styles.email}>useremail@domain.com</Text>
      </Text> */}

      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="text"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity onPress={resendCode}>
        <Text style={styles.resendCode}>Resend code</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.continueButton,
          otp.length === 0 ? styles.continueButtonDisabled : styles.continueButtonEnabled,
        ]}
        onPress={() => handleOtpSubmit(otp)}
        disabled={otp.length === 0}
      >
        <Text
          style={[
            styles.continueText,
            otp.length === 0 ? styles.continueTextDisabled : styles.continueTextEnabled,
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
    backgroundColor: '#FFCB05',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 16,
    color: '#007AFF',
  },
  icon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#7E7E7E',
    textAlign: 'center',
    marginBottom: 30,
  },
  email: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 25,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  resendCode: {
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  continueButton: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  continueButtonEnabled: {
    backgroundColor: '#000',
  },
  continueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueTextDisabled: {
    color: '#000',
  },
  continueTextEnabled: {
    color: '#fff',
  },
});

export default Otp;

