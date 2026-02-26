import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const hotels = [
  {
    id: '1',
    name: 'The Leela Palace',
    price: 'Rp 5.000.000',
    rating: 4,
    image:
      'https://www.ghmhotels.com/wp-content/uploads/CAM-Dining-The-Courtyard-Night021-865x780.jpg',
  },
  {
    id: '2',
    name: 'The Oberoi, Shangri-La',
    price: 'Rp 2.000.000',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
  },
  {
    id: '3',
    name: 'Taj MG Road',
    price: 'Rp 4.500.000',
    rating: 3,
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
  },
  {
    id: '4',
    name: 'Savera Seafront',
    price: 'Rp 7.900.000',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
  },
  {
    id: '5',
    name: 'Hotel Sea View',
    price: 'Rp 8.000.000',
    rating: 5,
    image:
      'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
  },
  {
    id: '6',
    name: 'Gateway Bekal',
    price: 'Rp 4.000.000',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  },
  {
    id: '7',
    name: 'The Oberoi Udaivilas',
    price: 'Rp 2.000.000',
    rating: 3,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
  },
  {
    id: '8',
    name: 'Taj Falaknuma Palace',
    price: 'Rp 9.000.000',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427',
  },
];

export default function HotelScreen({ navigation }: any) {
  const renderStars = (count: number) => '⭐'.repeat(count);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pilihan Hotel</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={hotels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Payment')}
            >
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={{ flex: 1 }}>
                <Text style={styles.hotelName}>{item.name}</Text>
                <Text style={styles.rating}>
                  {renderStars(item.rating)}
                </Text>
              </View>

              <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88E5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 15,
    marginBottom: 12,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
  },
  hotelName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 5,
    color: '#FFA000',
  },
  price: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },
});
