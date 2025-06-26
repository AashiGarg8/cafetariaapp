import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { auth } from '../configs/firebase';
import { reload, sendEmailVerification } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function VerifyEmailScreen() {
  const navigation = useNavigation();
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (auth.currentUser) {
        await reload(auth.currentUser);
        if (auth.currentUser.emailVerified) {
          clearInterval(interval);
          Alert.alert("✅ Verified", "Email verified successfully!");
          navigation.navigate("Login"); // Or Home screen
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const resendEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      Alert.alert('Sent Again!', 'Please check your inbox.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Your Email</Text>
      <Text style={styles.subtitle}>A verification link has been sent to:</Text>
      <Text style={styles.email}>{auth.currentUser?.email}</Text>

      <Button title="Resend Email" onPress={resendEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 5 },
  email: { fontSize: 16, fontWeight: 'bold', marginBottom: 20 },
});
