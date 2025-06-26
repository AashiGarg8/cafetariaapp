import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function MealScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={50} color="black" />
        <View>
          <Text style={styles.name}>Adbard Ellezabath</Text>
          <Text style={styles.university}>Bennett University</Text>
          <Text style={styles.semester}>Semester-6 | 2024</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Section 1: QR for Meal */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Services</Text>
          <Text style={styles.sectionTitle}>Scan QR For A Plate</Text>
          <View style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Scan QR Code</Text>
              <Text style={styles.cardSubtitle}>07:30 am - 10:30 pm</Text>
              <Text style={styles.cardDescription}>Meal scanning QR</Text>
              <TouchableOpacity>
                <Text style={styles.viewDetails}>View Details...</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.scanButton}
              onPress={() => navigation.navigate('QRScanner')}
            >
              <MaterialIcons name="qr-code-scanner" size={32} color="black" />
              <Text style={styles.scanText}>Scan</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section 2: Scan Plate */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Services</Text>
          <Text style={styles.sectionTitle}>Scan Plate For Points</Text>
          <View style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Scan The Plate After Meal</Text>
              <Text style={styles.cardDescription}>To claim your reward</Text>
              <TouchableOpacity>
                <Text style={styles.viewDetails}>View Details...</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.scanButton}
              onPress={() => navigation.navigate('PlateScanner')}
            >
              <MaterialIcons name="qr-code-scanner" size={32} color="black" />
              <Text style={styles.scanText}>Scan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Insights')}>
          <Ionicons name="analytics-outline" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4EA', // Soft pastel green
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20, // Increased padding for better spacing
    borderBottomWidth: 1,
    borderBottomColor: '#A7C7A7',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#355E3B',
    marginBottom: 4, // Added spacing between name and university
  },
  university: {
    fontSize: 16,
    color: '#5D8A66',
    marginBottom: 2, // Tweaked space
  },
  semester: {
    fontSize: 14,
    color: '#6EA377',
  },
  scrollContent: {
    paddingVertical: 25, // Increased padding for smooth scrolling
  },
  section: {
    marginBottom: 30, // Increased space between sections
  },
  sectionLabel: {
    fontSize: 14,
    color: '#666',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 15, // Added space before the card
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#D1E7DD',
    borderRadius: 12,
    padding: 20, // Increased padding for better element separation
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    flex: 1,
    marginRight: 12, // Added spacing between text and button
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#777',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8, // Adjusted spacing for cleaner look
  },
  viewDetails: {
    fontSize: 14,
    color: '#007BFF',
    marginTop: 10, // Better spacing below links
  },
  scanButton: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: '#78C2AD',
    borderRadius: 8,
  },
  scanText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 4, // Adjusted spacing between icon and text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15, // Added vertical padding for comfort
    borderTopWidth: 1,
    borderTopColor: '#A7C7A7',
    backgroundColor: '#D1E7DD',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});