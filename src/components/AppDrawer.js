import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Modal, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import AppCard from './AppCard'

const AppDrawer = ({ apps, isModalVisibleRef, setModalVisibleRef, navgigateToApp }) => {

    const [selectedApp, setSelectedApp] = useState(null);
    const databaseIcon = require('../../assets/database.png')

    return (
        <>
            <Modal
                visible={isModalVisibleRef}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisibleRef(false)}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalHeader}>Choose your app</Text>
                    <View style={styles.appsContainer}>
                        {apps.map((app) => (
                            <AppCard
                                key={app.id}
                                icon={databaseIcon}
                                text={app.text}
                                isSelected={selectedApp === app.id}
                                onPress={() => {
                                    setSelectedApp(app.id);
                                    navgigateToApp(app.text);
                                }}
                            />
                        ))}
                    </View>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisibleRef(false)}
                    >
                        <Icon name="close-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '500', // Setting modal height to 75% of the screen
        maxWidth: '90%',  // Setting modal width to 90% of the screen
        alignSelf: 'center', // Centering the modal horizontally
        borderRadius: 10,    // Adding rounded corners
        overflow: 'hidden',  // Ensuring the content doesn't overflow
        elevation: 5,        // Adding shadow for better visibility
        marginTop: 120,
        marginBottom: 120
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    appsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        elevation: 3,
    },
});


export default AppDrawer;