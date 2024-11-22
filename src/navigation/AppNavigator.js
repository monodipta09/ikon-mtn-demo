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
import DashboardScreen from "../screens/DashboardScreen";
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
        tabBarStyle: { backgroundColor: '#f5f5f5' }, // Default tabBar style
      }}
    >
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarStyle: { display: 'none' }, // Hide the tab bar for WelcomeScreen
        }}
      />
      <Tab.Screen
        name="chartdashboards"
        component={DashboardScreen}
        options={{
          tabBarStyle: { display: 'none' }, // Hide the tab bar for WelcomeScreen
        }}
      />
      {/* Other Tab Screens */}
    </Tab.Navigator>

  );
};

const LoadingScreenWrapper = (props) => {
  useEffect(() => {
    const handleBackPress = () => true; // Disable the back button on LoadingScreen

    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    }

    return () => {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
    };
  }, []);

  return <LoadingScreen {...props} />;
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
          component={LoadingScreenWrapper} // Use the wrapper to disable back button
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
