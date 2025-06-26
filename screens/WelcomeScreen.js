import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Headline */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingLeft}>Track. Reduce.</Text>
      </View>
      <Text style={styles.headingRight}>Impact!!</Text>

      {/* Food Waste Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/food_waste.png')} 
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>DON'T WASTE FOOD</Text>
        </View>
      </View>

      {/* App Name */}
      <Text style={styles.appName}>ScrapTrack</Text>

      {/* Subtext */}
      <Text style={styles.subtext}>Let’s Get Started</Text>

      {/* Login Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headingContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  headingLeft: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: -60,
  },
  headingRight: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left', // Now properly left-aligned
    width: '100%', // Ensures full left alignment
    paddingLeft: 20, // Adds slight padding for better positioning
    marginTop: -10, // Adjusts the vertical position
    marginBottom: 20, // Adds space below the heading
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,  
    height: 300,
  },
  overlay: {
    position: 'absolute',
    bottom: -10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  overlayText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  appName: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#B2D732', // Light green
    marginTop: 20,
  },
  subtext: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#B2D732',
    paddingVertical: 16, // Increased padding for height
    paddingHorizontal: 50, // Increased padding for width
    borderRadius: 30, // Rounded corners
    marginBottom: -50,
  },
  
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    
  }
});