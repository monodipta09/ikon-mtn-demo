import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HeaderTabsGrid from "../components/HeaderTabsGrid";
import InfoCardGrid from "../components/InfoCardGrid";
import { useRoute } from "@react-navigation/native"; // Import route
import AppHeader from "../components/appHeader";
import ConditionalDashboard from "../components/ConditionalDashboard";
import OverallDashboard from "../components/OverallDashboard";
import FinanceDashboard from "../components/FinanceDashboard";
import AdditionalDashboard from "../components/additionalDashboard";


const DashboardScreen = () => {
  const route = useRoute(); // Get route params
  const appName = route.params?.appName || "Dashboard"; // Fallback if no param

  const [activeTab, setActiveTab] = useState("Overall Dashboard");

  const tabs = [
    { baseColor: "#FFC107", tabName: "Overall Dashboard" },
    { baseColor: "#FFC107", tabName: "Finance Dashboard" },
    { baseColor: "#FFC107", tabName: "Additional Dashboard" },
  ];

  const cards = [
    { baseColor: "#02733C", cardName: "Subscribers", cardValue: "154,625" },
    { baseColor: "#191146", cardName: "Revenue", cardValue: "1,234,567" },
    { baseColor: "#272727", cardName: "Market Share", cardValue: "987,654" },
    { baseColor: "#712D2D", cardName: "Churn Rate", cardValue: "123,456" },
  ];

  const navigation = useNavigation();
  const navgigateToApp = (appName) => {
    if (appName === 'MTN') {
      navigation.navigate('chartdashboards', { appName: appName }); // Pass appName as a param
    } else {
      alert(`Feature for ${appName} is not yet implemented.`);
    }
  };

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.screenContainer}>
      {/* App Header */}
      <AppHeader navgigateToApp={navgigateToApp} />

      {/* Main Content */}
      <ScrollView style={styles.container}>
        {/* Header Tabs */}
        <HeaderTabsGrid
          tabs={tabs}
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />

        {/* Info Cards */}
        <View style={styles.cardContainer}>
          <InfoCardGrid cardData={cards} />
          <ConditionalDashboard matchProp={"associatedTabName"} matchValue={activeTab}>
            <OverallDashboard associatedTabName={"Overall Dashboard"} />
            <FinanceDashboard associatedTabName={"Finance Dashboard"} />
            <AdditionalDashboard associatedTabName={"Additional Dashboard"}></AdditionalDashboard>
          </ConditionalDashboard>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 60, // Add padding to account for AppHeader height
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  cardContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  chartContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default DashboardScreen;
