import React, { useState } from "react";
import handleLogin from '../screens/LoginScreen'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle state
  }

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.ikonPowered}>IKON</Text>
        <Text style={styles.title}>Harness the Power of Data</Text>

        {/* Username Input */}
        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password Input */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.inputWithIcon}
                placeholder="Password"
                secureTextEntry={!passwordVisible} // Use state to toggle visibility
                value={password}
                onChangeText={setPassword}
            />
          <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
          <Icon
            name={passwordVisible ? "eye" : "eye-slash"} // Toggle between "eye" and "eye-slash"
            size={20}
            color="#555"
          />
          </TouchableOpacity>
        </View>

        {/* Remember Me and Forgot Password */}
        <View style={styles.row}>
          <View style={styles.rememberMe}>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={() => {
              setUsername("");
              setPassword("");
            }}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              if (username && password) {
                handleLogin(username, password); // Call the handleLogin function with username and password
              } else {
                alert("Please enter both username and password");
              }
            }}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <TouchableOpacity>
          <Text style={styles.signUpText}>Don't have any account?</Text>
        </TouchableOpacity>
      </View>

      {/* Support Section */}
      <Text style={styles.supportText}>Looking for Support?</Text>
      <Text style={styles.version}>Version 8.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFCB05", // Updated background color
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    logo: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#fff", // White color for better contrast
      marginBottom: 10,
    },
    subLogo: {
      fontSize: 20,
      color: "#007BFF",
      marginBottom: 20,
    },
    formContainer: {
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 20,
      elevation: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
      color: "#000",
    },
    label: {
      fontSize: 14,
      color: "#555",
      marginBottom: 5,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
      backgroundColor: "#f9f9f9",
      textAlign: "left",
    },
    inputWithIcon: {
      flex: 1,
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingRight: 40,
      backgroundColor: "#f9f9f9",
    },
    passwordContainer: {
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      marginBottom: 15,
    },
    iconContainer: {
      position: "absolute",
      right: 10,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      fontSize: 18,
      color: "#555",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    rememberMe: {
      flexDirection: "row",
      alignItems: "center",
    },
    rememberMeText: {
      marginLeft: 5,
      color: "#fff", // White text for better contrast
    },
    forgotPassword: {
      color: "#007BFF",
      fontSize: 14,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    resetButton: {
      backgroundColor: "#fff", // Updated button color
      borderRadius: 20,
      padding: 10,
      flex: 1,
      alignItems: "center",
      marginRight: 10,
      borderColor: "#000",
      borderWidth: 1,
    },
    resetButtonText: {
      color: "#000", // White text for better contrast
    },
    loginButton: {
      backgroundColor: "#FFCB05", // Updated button color
      borderRadius: 20,
      padding: 10,
      flex: 1,
      alignItems: "center",
      marginLeft: 10,
    },
    loginButtonText: {
      color: "#fff", // White text for better contrast
    },
    signUpText: {
      textAlign: "center",
      color: "#007BFF",
      fontSize: 14,
    },
    supportText: {
      color: "#fff", // White text for better contrast
      fontSize: 14,
      marginTop: 20,
    },
    version: {
      color: "#AAA",
      fontSize: 12,
    },
    ikonPowered: {
        fontSize: 28,
        color: "#0d6efd",
        textAlign: "center",
        paddingBottom: 8
    }
  });
  

export default Login;
