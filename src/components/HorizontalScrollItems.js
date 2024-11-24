import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const HorizontalScrollItems = () => {
  const items = [
    { id: 1, label: "Overall Dashboard", color: "#fbbd08" },
    { id: 2, label: "Finance Dashboard", color: "#1e3a8a" },
    { id: 3, label: "Additional Metrics", color: "#1f2937" },
    { id: 4, label: "Custom Reports", color: "#7f1d1d" },
    { id: 5, label: "Performance Logs", color: "#0e7490" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.item, { backgroundColor: item.color }]}
          >
            <Text style={styles.itemLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  item: {
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    minWidth: Dimensions.get("window").width / 2.5,
  },
  itemLabel: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HorizontalScrollItems;
