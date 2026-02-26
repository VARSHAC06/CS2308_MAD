import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Details = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Name: iPhone 15</Text>
      <Text style={styles.text}>Price: ₹79,999</Text>
      <Text style={styles.text}>
        Description: Latest Apple smartphone with amazing features.
      </Text>

      <Button
        title="Add to Cart"
        onPress={() => navigation.navigate('Cart')}
      />

      <View style={{ marginTop: 10 }} />

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
