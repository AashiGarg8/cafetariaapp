/*import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
//import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeScanner } from 'expo-barcode-scanner';
export default function QRScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert('✅ QR Code Scanned', `📦 Type: ${type}\n🔗 Data: ${data}`);
    // 🔄 You can also navigate or do something with the data like:
    // navigation.navigate('SomeScreen', { scannedData: data });
  };

  if (hasPermission === null) return <Text style={styles.message}>Requesting for camera permission...</Text>;
  if (hasPermission === false) return <Text style={styles.message}>🚫 No access to camera</Text>;

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setScanned(false)} style={styles.scanAgainButton}>
            <Text style={styles.scanAgainText}>🔄 Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    padding: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    alignItems: 'center',
  },
  scanAgainButton: {
    backgroundColor: '#00C897',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  scanAgainText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
*/