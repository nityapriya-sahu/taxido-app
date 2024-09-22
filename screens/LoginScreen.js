import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginImage from '../assets/img_cabwithdriver.png';

export default function LoginScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [error, setError] = useState('');

  const handleGetOtp = () => {
    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
    } else {
      setError('');
      navigation.navigate('OTP', {phoneNumber});
    }
  };

  const handlePhoneNumberChange = value => {
    const cleanedValue = value.replace(/[^0-9]/g, '');
    if (cleanedValue.length <= 10) {
      setPhoneNumber(cleanedValue);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.taxidoLogo}>
        <Icon name="steering" size={40} color="#199767" />
        <Text style={styles.logoTitle}>Taxido</Text>
      </View>

      <View style={styles.image_container}>
        <Image
          source={LoginImage}
          width={100}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>Let's you in</Text>
      <Text style={styles.subtitle}>Hey, you have been missed!</Text>

      <Text style={styles.inputLabel}>Phone Number</Text>
      <View style={styles.phoneContainer}>
        <TextInput
          style={styles.countryInput}
          value={countryCode}
          onChangeText={setCountryCode}
          editable={false}
        />
        <TextInput
          style={styles.phoneInput}
          placeholder="Enter phone number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View>
        <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
          <Text style={styles.text}>Get OTP</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        New user? <Text style={styles.signUpLink}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  taxidoLogo: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {fontSize: 30, fontWeight: 'bold', color: '#199767'},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 40,
    color: 'black',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  phoneContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  countryInput: {
    width: 60,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#e3e6e4',
    borderRadius: 10,
    color: 'black',
  },
  phoneInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e3e6e4',
    borderRadius: 10,
    color: 'black',
  },
  button: {
    backgroundColor: '#199676',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },
  signUpLink: {
    color: 'blue',
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  image: {
    width: '100%',
    height: 187,
    objectFit: 'fill',
  },
});
