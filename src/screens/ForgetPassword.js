// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { SafeAreaView } from "react-native";
// import { StatusBar } from "react-native";

// const ForgetPassword = ({ handleLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible); // Toggle state
//   };

//   const dismissKeyboard = () => {
//     Keyboard.dismiss();
//   };

//   return (
//     <>
//       <SafeAreaView style={styles.safeArea}>
//         <KeyboardAvoidingView
//           style={styles.container}
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//           keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
//         >
//           {/* Wrap the whole layout in TouchableWithoutFeedback */}
//           <TouchableWithoutFeedback onPress={dismissKeyboard}>
//             <ScrollView
//               contentContainerStyle={styles.scrollView}
//               keyboardShouldPersistTaps="handled" // Ensure taps on buttons work
//             >
//               {/* Logo Section */}
//               <Image
//                 source={require("../../assets/logo.png")}
//                 style={styles.logo}
//               />

//               {/* Form Section */}
//               <View style={styles.formContainer}>
//                 <Text style={styles.ikonPowered}>IKON</Text>
//                 <Text style={styles.title}>Harness the Power of Data</Text>

//                 {/* Username Input */}
//                 <Text style={styles.label}>User Name</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter your username"
//                   value={username}
//                   onChangeText={setUsername}
//                 />

                

//                 {/* Buttons */}
//                 <View style={styles.buttonRow}>
//                   <TouchableOpacity
//                     style={styles.resetButton}
//                     onPress={() => {
//                       setUsername("");
//                       setPassword("");
//                     }}
//                   >
//                     <Text style={styles.resetButtonText}>Reset</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.loginButton}
//                     onPress={() => {
//                       if (username && password) {
//                         handleLogin(username, password); // Call the handleLogin function with username and password
//                       } else {
//                         alert("Please enter username");
//                       }
//                     }}
//                   >
//                     <Text style={styles.loginButtonText}>Submit</Text>
//                   </TouchableOpacity>
//                 </View>

//                 {/* Footer */}
                
//               </View>

//               {/* Support Section */}
//               <Text style={styles.supportText}>Looking for Support?</Text>
//               <Text style={styles.version}>Version 8.0.0</Text>

//               {/* Copyright Section */}
//               <Text style={styles.copyrightText}>
//                 © Copyright Powered by Keross
//               </Text>
//             </ScrollView>
//           </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#FFCB05", // Match the background color
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#FFCB05", // Updated background color
//   },
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   logo: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#fff", // White color for better contrast
//     marginBottom: 10,
//   },
//   formContainer: {
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     padding: 20,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#000",
//   },
//   label: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 5,
//     fontWeight: "800",
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: "#f9f9f9",
//     textAlign: "left",
//   },
//   inputWithIcon: {
//     flex: 1,
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingRight: 40,
//     backgroundColor: "#f9f9f9",
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     position: "relative",
//     marginBottom: 15,
//   },
//   iconContainer: {
//     position: "absolute",
//     right: 10,
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   rememberMeText: {
//     marginLeft: 5,
//     color: "#fff", // White text for better contrast
//   },
//   forgotPassword: {
//     color: "#007BFF",
//     fontSize: 14,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   resetButton: {
//     backgroundColor: "#fff", // Updated button color
//     borderRadius: 20,
//     padding: 10,
//     flex: 1,
//     alignItems: "center",
//     marginRight: 10,
//     borderColor: "#000",
//     borderWidth: 1,
//   },
//   resetButtonText: {
//     color: "#000",
//   },
//   loginButton: {
//     backgroundColor: "#FFCB05",
//     borderRadius: 20,
//     padding: 10,
//     flex: 1,
//     alignItems: "center",
//     marginLeft: 10,
//     elevation: 5,
//   },
//   loginButtonText: {
//     color: "#fff",
//   },
//   signUpText: {
//     textAlign: "center",
//     color: "#007BFF",
//     fontSize: 14,
//   },
//   supportText: {
//     color: "#0A1629",
//     fontSize: 14,
//     marginTop: 20,
//   },
//   version: {
//     color: "#0A1629",
//     fontSize: 12,
//   },
//   copyrightText: {
//     fontSize: 12,
//     color: "#0A1629",
//     textAlign: "center",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   ikonPowered: {
//     fontSize: 28,
//     color: "#0d6efd",
//     textAlign: "center",
//     paddingBottom: 8,
//   },
// });

// export default ForgetPassword;

























import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import { resetPassword } from "../utils/api"; // Adjust the path to your api.js file

const ForgetPassword = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation()

  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  // Listen for keyboard events to handle keyboard visibility state
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => console.log("Keyboard is shown")
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => console.log("Keyboard is hidden")
    );

    // Clean up listeners when the component unmounts
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!username) {
      alert("Please enter your username.");
      return;
    }
  
    try {
      const response = await resetPassword(username);
      console.log(response);
      alert("Password reset request sent successfully.");
      // navigation.navigate('Login', {}) // Uncomment if needed
    } catch (error) {
      alert("An error occurred while processing your request.");
      console.error(error);
    }
  }, [username]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="handled"
          >
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />

            <View style={styles.formContainer}>
              <Text style={styles.ikonPowered}>IKON</Text>
              <Text style={styles.title}>Harness the Power of Data</Text>

              <Text style={styles.label}>User Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
              />

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.resetButton}
                  onPress={() => setUsername("")}
                >
                  <Text style={styles.resetButtonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.loginButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.supportText}>Looking for Support?</Text>
            <Text style={styles.version}>Version 8.0.0</Text>
            <Text style={styles.copyrightText}>
              © Copyright Powered by Keross
            </Text>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFCB05", // Match the background color
  },
  container: {
    flex: 1,
    backgroundColor: "#FFCB05", // Updated background color
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff", // White color for better contrast
    marginBottom: 10,
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
    fontWeight: "800",
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#FFCB05",
    borderRadius: 20,
    padding: 10,
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: "#fff",
  },
  signUpText: {
    textAlign: "center",
    color: "#007BFF",
    fontSize: 14,
  },
  supportText: {
    color: "#0A1629",
    fontSize: 14,
    marginTop: 20,
  },
  version: {
    color: "#0A1629",
    fontSize: 12,
  },
  copyrightText: {
    fontSize: 12,
    color: "#0A1629",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  ikonPowered: {
    fontSize: 28,
    color: "#0d6efd",
    textAlign: "center",
    paddingBottom: 8,
  },
});

export default ForgetPassword;
