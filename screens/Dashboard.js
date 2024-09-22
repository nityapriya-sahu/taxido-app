// screens/Dashboard.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Switch,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/EvilIcons';
import Star from 'react-native-vector-icons/AntDesign';

import Cards from './Cards';

export default function Dashboard() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header1Cont}>
            <View style={styles.taxidoLogo}>
              <Icon
                name="steering"
                size={40}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.logoTitle}>Taxify</Text>
            </View>
            <View>
              <Icon1
                name="notifications-circle"
                size={40}
                color="white"
                style={styles.icon}
              />
            </View>
          </View>
          <View style={styles.notiToggleCont}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
              On/Off
            </Text>

            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.cardsContainer}>
          <Cards number="3100" text="total Earning" />
          <Cards number="02" text="Pending Ride" />
          <Cards number="12" text="Complete Ride" />
          <Cards number="04" text="Cancel Ride" />
        </View>
        <View>
          <Text style={styles.nuride}>New Upcoming Ride</Text>
        </View>
        <View
          style={{
            gap: 20,
            borderWidth: 1,
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 10,
            borderColor: '#e3e6e6',
            marginBottom: 30,
          }}>
          <View
            style={{
              gap: 20,
              backgroundColor: '#f5f5f5',
              marginHorizontal: 10,
              paddingHorizontal: 15,
              paddingVertical: 20,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <User name="user" size={40} color="black" style={styles.icon} />
                <Text style={{fontSize: 18, color: 'black'}}>
                  Johnson Smithkover
                </Text>
              </View>
              <Text style={{color: '#199676', fontSize: 18}}>
                <Star name="star" size={20} color="gold" style={styles.icon} />
                4.5
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 15, color: 'black'}}>
                20 Sept'24 at 12:00 AM
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                <User
                  name="location"
                  size={20}
                  color="black"
                  style={styles.icon}
                />
                9.5 km
              </Text>
            </View>
          </View>
          <View
            style={{
              gap: 30,
              backgroundColor: '#f5f5f5',
              marginHorizontal: 10,
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <User
                  name="location"
                  size={25}
                  color="black"
                  style={styles.icon}
                />
                <Text style={{fontSize: 18, color: 'black'}}>
                  220 Younge St, Toronto, Canada
                </Text>
              </View>
              {/* <Text style={{color: '#199676', fontSize: 15}}>4.5</Text> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon1
                  name="locate"
                  size={20}
                  color="black"
                  style={styles.icon}
                />
                <Text style={{fontSize: 18, color: 'black'}}>
                  17600 Younge St, Newmarket,L3Y, Canada
                </Text>
              </View>
              {/* <Text>9.5 km</Text> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  //   title: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //   },
  taxidoLogo: {
    // position: 'absolute',
    // top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoTitle: {fontSize: 30, fontWeight: 'bold', color: 'white'},
  headerContainer: {
    backgroundColor: '#199676',
    gap: 20,
    paddingVertical: 30,
  },
  header1Cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  notiToggleCont: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 40,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#e3e6e4',
    rowGap: 20,
    // borderColor: 'red',
    // borderBottomWidth: 5,
  },
  nuride: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingLeft: 10,
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
  },
});
