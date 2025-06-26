import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../configs/firebase';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  /*const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (!user.emailVerified) {
        Alert.alert('Email Not Verified', 'Please verify your email before logging in.');
        await auth.signOut();
        return;
      }
  
      Alert.alert('Login Successful', 'Welcome!');
      
      // 👇 Navigate to the StudentProfile screen
      navigation.navigate('adminprofile'); 
  
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };*/
  /*const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Input Error", "Please enter both email and password.");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (!user.emailVerified) {
        Alert.alert('Email Not Verified', 'Please verify your email before logging in.');
        await auth.signOut();
        return;
      }
  
      //Alert.alert('Login Successful', 'Welcome!');
      navigation.navigate('adminprofile');
  
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };*/
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Input Error", "Please enter both email and password.");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (!user.emailVerified) {
        Alert.alert('Email Not Verified', 'Please verify your email before logging in.');
        await auth.signOut();
        return;
      }
  
      // Navigate to the AppDrawer
      navigation.navigate('App');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };
  
  

  const handleForgotPassword = async () => {
    if (!email) return Alert.alert("Input Required", "Please enter your email to reset password.");
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Password Reset", "Check your email for password reset instructions.");
    } catch (error) {
      Alert.alert("Reset Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>ScrapTrack</Text>

      {/* Signup button navigates to Signup screen */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>

      <Image source={require('../assets/bennett_logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.universityText}>Bennett University</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#666"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          style={styles.passwordInput}
          placeholderTextColor="#666"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={22} color="black" style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

      <View style={styles.divider} />

      {/* Google and Microsoft Login */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.socialText}>Continue with Google</Text>
        <Image source={require('../assets/google_icon.jpg')} style={styles.socialIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.microsoftButton}>
        <Text style={styles.socialText}>Continue with Microsoft</Text>
        <Image source={require('../assets/microsoft_icon.jpg')} style={styles.socialIcon} />
      </TouchableOpacity>

      {/* Phone Login */}
      <TouchableOpacity style={styles.phoneButton} onPress={() => navigation.navigate("PhoneAuth")}>
        <Text style={styles.phoneButtonText}>Login with Phone Number</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By logging in you agree to our <Text style={styles.termsLink}>Terms and Services</Text> and receive updates from our app.
      </Text>
    </View>
  );
}

// styles remain unchanged – keep your styles block at the end


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7EA42E',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  createAccountButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  createAccountText: {
    fontSize: 12,
    fontWeight: '600',
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: -50,
  },
  universityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 45,
    fontSize: 14,
  },
  eyeIcon: {
    marginRight: 10,
  },
  forgotPassword: {
    fontSize: 15,
    color: '#7EA42E',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#B2D732',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  microsoftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
  },
  socialText: {
    fontSize: 14,
    marginRight: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  phoneButton: {
    backgroundColor: '#7EA42E',
    marginTop: 15,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  phoneButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
  },
  termsLink: {
    fontWeight: 'bold',
    color: '#7EA42E',
  },
});
