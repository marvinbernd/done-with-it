import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require('../assets/jacket.jpg')} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.price}>100$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    paddingVertical: 40,
  },
});

export default ListingDetailsScreen;
