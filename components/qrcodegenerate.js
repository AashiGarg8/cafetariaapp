/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRGeneratorScreen() {
  // Dynamic data to encode
  const dataToEncode = `MealScan:${Date.now()}`; // Generates a unique value based on the current timestamp

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🍽️ Meal QR Code</Text>
      <Text style={styles.subtext}>Show this QR to scan and log your meal</Text>
      
      <View style={styles.qrContainer}>
        <QRCode
          value={dataToEncode}
          size={220}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 30,
    textAlign: 'center',
  },
  qrContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
});*/