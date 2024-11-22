// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { BackHandler, Alert, Platform } from 'react-native';

// import LoginScreen from '../screens/LoginScreen';
// import OtpScreen from '../screens/OtpScreen';
// import DashboardScreen from '../screens/DashboardScreen';
// import LoadingScreen from '../screens/LoadingScreen'; // Import Loading Screen

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   const navigationRef = React.useRef();

//   useEffect(() => {
//     const handleBackPress = () => {
//       // Get the current route
//       const currentRoute = navigationRef.current?.getCurrentRoute()?.name;

//       if (currentRoute === 'Dashboard') {
//         // Show logout alert
//         Alert.alert('Logout', 'Do you want to logout and return to the Login screen?', [
//           {
//             text: 'Cancel',
//             style: 'cancel',
//           },
//           {
//             text: 'Yes',
//             onPress: () => {
//               // Reset navigation to Login screen
//               navigationRef.current?.reset({
//                 index: 0,
//                 routes: [{ name: 'Login' }],
//               });
//             },
//           },
//         ]);
//         return true; // Prevent the default back action
//       }
//       return false; // Allow default back action for other screens
//     };

//     if (Platform.OS === 'android') {
//       BackHandler.addEventListener('hardwareBackPress', handleBackPress);
//     }

//     return () => {
//       if (Platform.OS === 'android') {
//         BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//       }
//     };
//   }, []);

//   return (
//     <NavigationContainer ref={navigationRef}>
//       <Stack.Navigator initialRouteName="Login">
//         {/* Login Screen */}
//         <Stack.Screen name="Login" component={LoginScreen} />

//         {/* OTP Screen */}
//         <Stack.Screen name="Otp" component={OtpScreen} />

//         {/* Loading Screen */}
//         <Stack.Screen
//           name="Loading"
//           component={LoadingScreen}
//           options={{
//             headerShown: false, // Hide header for Loading screen
//             gestureEnabled: false, // Disable gestures for Loading
//           }}
//         />

//         {/* Dashboard Screen */}
//         <Stack.Screen
//           name="Dashboard"
//           component={DashboardScreen}
//           options={{
//             gestureEnabled: false, // Disable swipe-back gesture for iOS
//             headerLeft: () => null, // Remove the back button for Dashboard on iOS
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;






// import React, { useEffect } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { BackHandler, Alert, Platform } from 'react-native';

// // Screens
// import LoginScreen from '../screens/LoginScreen';
// import OtpScreen from '../screens/OtpScreen';
// import LoadingScreen from '../screens/LoadingScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';
// import Dashboard1Screen from '../screens/Dashboard1Screen';
// import Dashboard2Screen from '../screens/Dashboard2Screen';

// // Create navigators
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const DashboardTabs = ({ navigation }) => {
  // useEffect(() => {
  //   const handleBackPress = () => {
  //     Alert.alert('Logout', 'Do you want to logout and return to the Login screen?', [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Yes',
  //         onPress: () => {
  //           navigation.reset({
  //             index: 0,
  //             routes: [{ name: 'Login' }],
  //           });
  //         },
  //       },
  //     ]);
  //     return true; // Prevent the default back action
  //   };

  //   if (Platform.OS === 'android') {
  //     BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  //   }

  //   return () => {
  //     if (Platform.OS === 'android') {
  //       BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  //     }
  //   };
  // }, [navigation]);

//   return (
//     <Tab.Navigator
//       initialRouteName="Welcome"
//       screenOptions={{
//         tabBarActiveTintColor: '#2c3e50',
//         tabBarInactiveTintColor: '#bdc3c7',
//         tabBarStyle: { backgroundColor: '#f5f5f5' },
//       }}
//     >
//       <Tab.Screen
//         name="Welcome"
//         component={WelcomeScreen}
//         options={{
//           tabBarLabel: 'Welcome',
//         }}
//       />
//       <Tab.Screen
//         name="Dashboard 1"
//         component={Dashboard1Screen}
//         options={{
//           tabBarLabel: 'Dashboard 1',
//         }}
//       />
//       <Tab.Screen
//         name="Dashboard 2"
//         component={Dashboard2Screen}
//         options={{
//           tabBarLabel: 'Dashboard 2',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const AppNavigator = () => {
//   const navigationRef = React.useRef();

//   return (
//     <NavigationContainer ref={navigationRef}>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Otp" component={OtpScreen} />
//         <Stack.Screen
//           name="Loading"
//           component={LoadingScreen}
//           options={{ headerShown: false, gestureEnabled: false }}
//         />
//         <Stack.Screen
//           name="Dashboard"
//           component={DashboardTabs} // Use bottom tab navigator here
//           options={{ gestureEnabled: false, headerLeft: () => null }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;



// import React, { useEffect } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { BackHandler, Alert, Platform } from 'react-native';

// // Screens
// import LoginScreen from '../screens/LoginScreen';
// import OtpScreen from '../screens/OtpScreen';
// import LoadingScreen from '../screens/LoadingScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';
// import Dashboard1Screen from '../screens/Dashboard1Screen';
// import Dashboard2Screen from '../screens/Dashboard2Screen';

// // Create navigators
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const DashboardTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Welcome"
//       screenOptions={{
//         headerShown: false, // Removes headers from all tabs
//         tabBarActiveTintColor: '#2c3e50',
//         tabBarInactiveTintColor: '#bdc3c7',
//         tabBarStyle: { backgroundColor: '#f5f5f5' },
//       }}
//     >
//       <Tab.Screen name="Welcome" component={WelcomeScreen} />
//       <Tab.Screen name="Dashboard 1" component={Dashboard1Screen} />
//       <Tab.Screen name="Dashboard 2" component={Dashboard2Screen} />
//     </Tab.Navigator>
//   );
// };

// const AppNavigator = () => {
//   const navigationRef = React.useRef();

//   useEffect(() => {
//     const handleBackPress = () => {
//       const currentRoute = navigationRef.current?.getCurrentRoute()?.name;

//       if (currentRoute === 'Dashboard') {
//         Alert.alert('Logout', 'Do you want to logout and return to the Login screen?', [
//           {
//             text: 'Cancel',
//             style: 'cancel',
//           },
//           {
//             text: 'Yes',
//             onPress: () => {
//               navigationRef.current?.reset({
//                 index: 0,
//                 routes: [{ name: 'Login' }],
//               });
//             },
//           },
//         ]);
//         return true;
//       }
//       return false;
//     };

//     if (Platform.OS === 'android') {
//       BackHandler.addEventListener('hardwareBackPress', handleBackPress);
//     }

//     return () => {
//       if (Platform.OS === 'android') {
//         BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//       }
//     };
//   }, []);

//   return (
//     <NavigationContainer ref={navigationRef}>
//       <Stack.Navigator
//         initialRouteName="Login"
//         screenOptions={{
//           headerShown: false, // Removes headers from all stack screens
//         }}
//       >
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Otp" component={OtpScreen} />
//         <Stack.Screen
//           name="Loading"
//           component={LoadingScreen}
//           options={{ headerShown: false, gestureEnabled: false }}
//         />
//         <Stack.Screen name="Dashboard" component={DashboardTabs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;



import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler, Alert, Platform } from 'react-native';

// Screens
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import LoadingScreen from '../screens/LoadingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Dashboard1Screen from '../screens/Dashboard1Screen';
import Dashboard2Screen from '../screens/Dashboard2Screen';

// Create navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardTabs = ({ navigation }) => {
  useEffect(() => {
    const handleBackPress = () => {
      Alert.alert('Logout', 'Do you want to logout and return to the Login screen?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }], // Reset navigation to Login
            });
          },
        },
      ]);
      return true; // Prevent the default back action
    };

    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    }

    return () => {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
    };
  }, [navigation]);

  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false, // Removes headers from all tabs
        tabBarActiveTintColor: '#2c3e50',
        tabBarInactiveTintColor: '#bdc3c7',
        tabBarStyle: { backgroundColor: '#f5f5f5' },
      }}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Dashboard 1" component={Dashboard1Screen} />
      <Tab.Screen name="Dashboard 2" component={Dashboard2Screen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const navigationRef = React.useRef();

  useEffect(() => {
    const handleBackPress = () => {
      const currentRoute = navigationRef.current?.getCurrentRoute()?.name;

      if (currentRoute === 'Dashboard') {
        Alert.alert('Logout', 'Do you want to logout and return to the Login screen?', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              navigationRef.current?.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            },
          },
        ]);
        return true;
      }
      return false;
    };

    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    }

    return () => {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // Removes headers from all stack screens
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={(props) => <DashboardTabs {...props} />} // Pass navigation to DashboardTabs
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

