import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Modal, Text, } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"; // Add this import
import { useNavigation } from '@react-navigation/native';
import AppDrawer from './AppDrawer';

const databaseIcon = require("../../assets/database.png");

const Header = ({ navgigateToApp }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const navigation = useNavigation(); // Navigation object

  const apps = [
    { id: 1, text: 'MTN' },
    { id: 2, text: 'SSD' },
    { id: 3, text: 'ML/AI' },
    { id: 4, text: 'ITSM' },
    { id: 5, text: 'CCC' },
    { id: 6, text: 'Document Management' },
    { id: 7, text: 'Project Management' },
    { id: 8, text: 'Sales CRM' },
    { id: 9, text: 'HCM' },
  ];

  return (
    <View style={styles.container}>
      {/* Left Icons */}
      <View style={styles.leftIcons}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setIsModalVisible(true)} // Show the modal
        >
          <Icon name="menu-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require("../../assets/iconLogo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>

      {/* Right Icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/user.png")}
          style={styles.logo}
        />
      </View>

      {/* Modal for App Selection */}
      <AppDrawer apps={apps} isModalVisibleRef={isModalVisible} setModalVisibleRef={setIsModalVisible} navgigateToApp={navgigateToApp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 10,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 2,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

export default Header;
