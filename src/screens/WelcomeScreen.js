import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
} from 'react-native';
import AppCard from '../components/AppCard';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import AppHeader from '../components/appHeader';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation()

  const navgigateToApp = (appName) => {
    if (appName === 'MTN') {
      navigation.navigate('chartdashboards', { appName: appName }); // Pass appName as a param
    } else {
      alert(`Feature for ${appName} is not yet implemented.`);
    }
  }

  return (
    <View style={styles.container}>
      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <Text style={styles.headerText}>Welcome to IKON Orchestration Platform</Text>

        {/* Description */}
        <Text style={styles.description}>
          The only true OpenAI-enabled Orchestration Platform that will solve all your challenges and successfully implement your functional and technical roadmap.
        </Text>

        {/* Image */}
        <Image source={require('../../assets/welcomePage.png')} style={styles.image} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.buttonText}>Subscribe the Apps</Text>
        </TouchableOpacity>
      </View>
      <AppHeader navgigateToApp={navgigateToApp}></AppHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  description: {
    fontSize: width * 0.035,
    color: '#555',
    textAlign: 'center',
    marginBottom: height * 0.05,
    lineHeight: width * 0.05,
  },
  image: {
    width: width * 0.9,
    height: height * 0.35,
    resizeMode: 'contain',
    marginBottom: height * 0.05,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: height * 0.05,
    paddingHorizontal: width * 0.1,
  },
  settingsButton: {
    width: width * 0.35,
    backgroundColor: '#FFF',
    paddingVertical: height * 0.02,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginRight: width * 0.02,
  },
  subscribeButton: {
    width: width * 0.35,
    backgroundColor: '#FFCB05',
    paddingVertical: height * 0.02,
    borderRadius: 30,
    alignItems: 'center',
    marginLeft: width * 0.02,
  },
  buttonText: {
    color: '#000',
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  modalContainer: {
    marginHorizontal: 20,
    marginVertical: 202,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  appsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFCB05',
    borderRadius: 50,
    padding: 10,
  },
  closeButtonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default WelcomeScreen;







