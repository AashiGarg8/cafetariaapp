/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { getAuth, PhoneAuthProvider, signInWithCredential, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../configs/firebase'; // your firebase config export

const PhoneAuthScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [code, setCode] = useState('');

  const sendVerification = async () => {
    try {
      const verifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved
        },
      }, auth);

      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, verifier);
      setVerificationId(confirmationResult.verificationId);
      Alert.alert('OTP Sent');
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, code);
      await signInWithCredential(auth, credential);
      Alert.alert('Phone authentication successful!');
    } catch (err) {
      Alert.alert('Invalid OTP', err.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <View id="recaptcha-container" /> {/* Invisible reCAPTCHA target */}

      <Text>Enter Phone Number</Text>
      <TextInput
        placeholder="+91XXXXXXXXXX"
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      <Button title="Send OTP" onPress={sendVerification} />

      {verificationId && (
        <>
          <Text>Enter OTP</Text>
          <TextInput
            placeholder="123456"
            onChangeText={setCode}
            keyboardType="number-pad"
            style={{ borderBottomWidth: 1, marginBottom: 20 }}
          />
          <Button title="Verify OTP" onPress={confirmCode} />
        </>
      )}
    </View>
  );
};

export default PhoneAuthScreen;
*/