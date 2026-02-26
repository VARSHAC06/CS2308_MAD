import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput
} from 'react-native';

import menuData from './menu.json';

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
};

const App = () => {
  const [search, setSearch] = useState("");

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "Veg":
        return "#d4edda";
      case "Non-Veg":
        return "#f8d7da";
      case "Beverage":
        return "#d1ecf1";
      default:
        return "#ffffff";
    }
  };

  // Filter menu items based on search text
  const filteredData = menuData.filter((item: MenuItem) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: getCategoryColor(item.category) }
      ]}
    >
      <Text style={styles.name}>🍽 {item.name}</Text>
      <Text style={styles.text}>📂 {item.category}</Text>
      <Text style={styles.text}>💰 ₹{item.price}</Text>
      <Text style={styles.text}>⭐ {item.rating}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Restaurant Menu</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList<MenuItem>
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        ListEmptyComponent={
          <Text style={styles.empty}>No Menu Items Found</Text>
        }
      />

      <Text style={styles.footer}>Thank You for Visiting</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  },
  searchInput: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  footer: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 15
  },
  empty: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20
  },
  card: {
    width: "100%",
    padding: 15,
    borderRadius: 12
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  text: {
    fontSize: 15,
    marginBottom: 3
  }
});
