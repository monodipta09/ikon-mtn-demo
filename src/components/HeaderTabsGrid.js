import React from "react";
import { FlatList, View, StyleSheet, useState } from "react-native";
import HeaderTabs from "./HeaderTabs";

const HeaderTabsGrid = ({ tabs = [], activeTab = "Overall Dashboard", onTabPress = () => { } }) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        keyExtractor={(item) => item.tabName}
        renderItem={({ item }) => (
          <HeaderTabs
            baseColor={item.baseColor}
            tabName={item.tabName}
            isActive={item.tabName === activeTab}
            onPress={() => {
              onTabPress(`${item.tabName}`)
            }}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#f9f9f9",
  },
});

export default HeaderTabsGrid;
