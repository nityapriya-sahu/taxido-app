// screens/OTPScreen.js
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginImage from '../assets/img_cabwithdriver.png';

export default function OTPScreen({route, navigation}) {
  const {phoneNumber} = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, '');
    setOtp(newOtp);
    if (value && index < 4) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleVerifyOtp = () => {
    // navigation.navigate('Dashboard');
    if (otp.some(value => value === '')) {
      setError('Please fill all OTP fields');
    } else {
      setError('');
      navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.taxidoLogo}>
        <Icon name="steering" size={40} color="#199767" style={styles.icon} />
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
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter OTP sent to +91 {phoneNumber}</Text>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={text => handleOtpChange(text, index)}
          />
        ))}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {/* <Button title="Verify" onPress={handleVerifyOtp} /> */}
      <View>
        <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.text}>Verify</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 40,
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    // borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
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
    textAlign: 'center',
    marginBottom: 20,
  },
});
