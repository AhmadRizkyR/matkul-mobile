import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const btnList = [
  {
    title: "Flex Direction",
    key: "flexDirection",
    value: [
      { label: "row", value: "row" },
      { label: "row-reverse", value: "row-reverse" },
      { label: "col", value: "column" },
      { label: "col-reverse", value: "column-reverse" },
    ],
  },
  {
    title: "Justify Content",
    key: "justifyContent",
    value: [
      { label: "start", value: "flex-start" },
      { label: "center", value: "center" },
      { label: "end", value: "flex-end" },
      { label: "between", value: "space-between" },
      { label: "around", value: "space-around" },
      { label: "evenly", value: "space-evenly" },
    ],
  },
  {
    title: "Align Items",
    key: "alignItems",
    value: [
      { label: "start", value: "flex-start" },
      { label: "center", value: "center" },
      { label: "end", value: "flex-end" },
      { label: "stretch", value: "stretch" },
      { label: "baseline", value: "baseline" },
    ],
  },
  {
    title: "Align Content", // only works with wrap
    key: "alignContent",
    value: [
      { label: "start", value: "flex-start" },
      { label: "center", value: "center" },
      { label: "end", value: "flex-end" },
      { label: "between", value: "space-between" },
      { label: "around", value: "space-around" },
      { label: "evenly", value: "space-evenly" },
      { label: "stretch", value: "stretch" },
    ],
  },
];

const boxList = [
  { label: "1", color: "red", height: 40, width: 60 },
  { label: "2", color: "green", height: 150, width: 90 },
  { label: "3", color: "blue", height: 60, width: 70 },
  { label: "4", color: "yellow", height: 100, width: 50 },
  { label: "5", color: "purple", height: 130, width: 80 },
  { label: "6", color: "brown", height: 80, width: 100 },
  { label: "7", color: "orange", height: 120, width: 60 },
  { label: "8", color: "cyan", height: 90, width: 75 },
  { label: "9", color: "magenta", height: 70, width: 85 },
  { label: "10", color: "teal", height: 110, width: 95 },
];

export default function FlexLayout() {
  const [layout, setLayout] = useState({
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  });

  const handlePress = (key: any, value: any) => {
    setLayout((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.boxDisplay, layout]}>
        {boxList.map((item, index) => (
          <View
            key={index}
            style={[
              styles.flexItem,
              {
                backgroundColor: item.color,
                height: item.height,
                width: item.width,
              },
            ]}
          >
            <Text style={styles.flexItemText}>{item.label}</Text>
          </View>
        ))}
      </View>

      <ScrollView style={styles.menuDisplay}>
        {btnList.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: "center",
              gap: 10,
              marginTop: index !== 0 ? 20 : 0,
            }}
          >
            <Text style={{ fontWeight: "500" }}>{item.title}</Text>
            <View style={button.flexList}>
              {item.value.map((val, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    button.container,
                    layout[item.key as keyof typeof layout] === val.value && {
                      backgroundColor: "#1d4ed8",
                    },
                  ]}
                  activeOpacity={0.8}
                  onPress={() => handlePress(item.key, val.value)}
                >
                  <Text style={button.text}>
                    {val.label.replace("-", " ").toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <View style={{ paddingBottom: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  boxDisplay: {
    flex: 1,
    height: 300, // Increased height for better visibility
    flexWrap: "wrap",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  flexItem: {
    width: 60,
    minHeight: 40, // Minimum height instead of fixed height
    backgroundColor: "#347deb",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    borderRadius: 10,
  },
  flexItemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  menuDisplay: {
    flex: 1,
    padding: 10,
  },
});

const button = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#81a8e6",
  },
  flexList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
