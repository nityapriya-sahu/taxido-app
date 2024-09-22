import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Wallet from 'react-native-vector-icons/Ionicons';
import Arrow from 'react-native-vector-icons/AntDesign';

const Cards = ({number, text}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.number}>{number}</Text>
        <View style={styles.icon}>
          <Wallet name="wallet" size={20} color="green" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.icon}>
          <Arrow name="arrowright" size={20} color="green" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // borderWidth: 1,
    borderBottomWidth: 5,
    borderColor: '#199676',
    padding: 10,
    width: '48%',
    marginBottom: 10,
    // borderCo: '#199676',
    borderRadius: 8,
    paddingVertical: 20,
    gap: 20,
    backgroundColor: 'white',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#199676',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000000',
  },
  icon: {
    // backgroundColor: 'grey',
    // padding: 20,
    // borderRadius: 50,
    // height: 40,
    // width: 40,
  },
});

export default Cards;
