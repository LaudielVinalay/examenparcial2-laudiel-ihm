import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const dataRestaurants = [
  { id: '1', title: 'Groceries', image: require('./assets/food1.png'), description: 'burger, dessert', time: '15-20 min' },
  { id: '2', title: 'Groceries', image: require('./assets/food2.png'), description: 'burger, dessert', time: '15-20 min' },
];

const dataGroceries = [
  { id: '3', title: 'Groceries', image: require('./assets/grocery1.png'), description: '15-20 min' },
  { id: '4', title: 'Groceries', image: require('./assets/grocery2.png'), description: '15-20 min' },
];

const Header = () => (
  <View style={styles.header}>
    <Icon name="place" size={20} color="black" />
    <Text style={styles.location}>9185 Mayflower Drive Atlanta</Text>
  </View>
);

const ImageCarousel = () => (
  <View style={styles.carousel}>
    <Image source={require('./assets/sushi.png')} style={styles.carouselImage} />
  </View>
);

const CategoryList = ({ title, data }) => (
  <View style={styles.categoryContainer}>
    <View style={styles.categoryHeader}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <Text style={styles.cardTime}>{item.time}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <Header />
    <ImageCarousel />
    <CategoryList title="All Restaurants" data={dataRestaurants} />
    <CategoryList title="All Groceries" data={dataGroceries} />
  </ScrollView>
);


export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  location: {
    marginLeft: 8,
    fontSize: 16,
  },
  carousel: {
    height: 200,
    marginVertical: 16,
    alignItems: 'center',
  },
  carouselImage: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
  },
  categoryContainer: {
    marginVertical: 16,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#007bff',
  },
  card: {
    width: 150,
    marginHorizontal: 8,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardDescription: {
    color: '#666',
  },
  cardTime: {
    color: '#999',
  },
});
