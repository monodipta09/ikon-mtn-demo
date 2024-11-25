import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HeaderTabs = ({ baseColor = "#FFD700", tabName = "Tab Name", isActive = false, onPress = () => { } }) => {
  return (
    <TouchableOpacity
      style={[
        styles.tab,
        {
          backgroundColor: isActive ? baseColor : "#fff",
          borderColor: isActive ? baseColor : "#DDDDDD",
        },
      ]}
      onPress={() => { onPress() }}
    >
      <Text style={[styles.tabText, { color: isActive ? "#000" : "#000" }]}>{tabName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default HeaderTabs;
