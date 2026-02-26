import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import students from "./students.json";

type Student = {
  id: string;
  name: string;
  grade: string;
  section: string;
};

const App = () => {

  const renderStudent = ({ item }: { item: Student }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>Grade: {item.grade}</Text>
        <Text style={styles.details}>Section: {item.section}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>

      <FlatList
        data={students}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 16,
  },
});

export default App;
