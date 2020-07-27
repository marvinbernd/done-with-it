import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default Card;
