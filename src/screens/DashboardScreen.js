import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HeaderTabsGrid from "../components/HeaderTabsGrid";
import InfoCardGrid from "../components/InfoCardGrid";
import { useRoute } from "@react-navigation/native";
import AppHeader from "../components/appHeader";

import ConditionalDashboard from "../components/ConditionalDashboard";
import OverallDashboard from "../components/OverallDashboard";

const DashboardScreen = () => {
  const route = useRoute();
  const appName = route.params?.appName || "Dashboard";

  const [activeTab, setActiveTab] = useState("Overall Dashboard");

  const tabs = [
    { baseColor: "#FFC107", tabName: "Overall Dashboard" },
    { baseColor: "#FFC107", tabName: "Finance Dashboard" },
    { baseColor: "#FFC107", tabName: "Additional Dashboard" },
  ];

  const cards = [
    { baseColor: "#FFCB05", cardName: "Subscribers", cardValue: "154,625" },
    { baseColor: "#191146", cardName: "Revenue", cardValue: "1,234,567" },
    { baseColor: "#272727", cardName: "Market Share", cardValue: "987,654" },
    { baseColor: "#712D2D", cardName: "Churn Rate", cardValue: "123,456" },
  ];

  const navigation = useNavigation();
  const navgigateToApp = (appName) => {
    if (appName === 'MTN') {
      navigation.navigate('chartdashboards', { appName: appName });
    } else {
      alert(`Feature for ${appName} is not yet implemented.`);
    }
  };

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      {/* App Header */}
      <AppHeader navgigateToApp={navgigateToApp} />

      {/* Main Content */}
      <ScrollView style={styles.scrollView}>
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
          </ConditionalDashboard>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 55,
  },
  scrollView: {
    flex: 1,
  },
  cardContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
  },
});

export default DashboardScreen;
