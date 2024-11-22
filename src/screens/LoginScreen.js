import React from "react";
import Login from "../components/Login";
import {loginApi} from "../utils/api"
const LoginScreen = ({ navigation }) => {
  // Function to handle login logic
  const handleLogin = async (username, password) => {

    const isvalidated=await loginApi(username,password);
    console.log(isvalidated);
    // Mock validation: username = admin, password = 1234
    if (isvalidated) {
      // Navigate to OTP screen
      navigation.navigate("Otp");
    } else {
      // Show alert for invalid credentials
      alert("Invalid username or password");
    }
  };

  return (
    // Pass handleLogin as a prop to the Login component
    <Login handleLogin={handleLogin} />
  );
};

export default LoginScreen;
