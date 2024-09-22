import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ActiveRide = () => {
  return (
    <View style={styles.container}>
      <Text>Active Ride Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActiveRide;
