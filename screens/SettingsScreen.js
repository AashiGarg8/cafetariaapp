import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ServiceRequestScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {

    console.log('User logged out');
    navigation.navigate('Login'); // Navigate to the Login screen after logout
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>TraySure</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Adbard Ellezabath</Text>
          <Text style={styles.university}>Bennett University</Text>
          <Text style={styles.semester}>Semester-6 | 2024</Text>
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitle}>My Services</Text>

        <TouchableOpacity style={styles.serviceButton}>
          <Text style={styles.serviceButtonText}>+ New Service Request</Text>
        </TouchableOpacity>

        {/* In Progress Request */}
        <View style={styles.serviceRequest}>
          <View style={{ marginBottom: 8 }}>
            <Text style={styles.requestTitle}>In Progress</Text>
            <Text style={styles.requestDetail}>C-YRP - Problem With Meal</Text>
            <Text style={styles.requestDate}>19-07-2024 | 08:12 PM</Text>
          </View>
          <TouchableOpacity style={styles.viewDetailsButton}>
            <Text style={styles.viewDetailsText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate('adminprofile')}>
         <Ionicons name="person-circle-outline" size={28} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
         <Feather name="settings" size={26} color="#333" />
      </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Feather name="log-out" size={26} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

export default ServiceRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F3',
    //paddingTop: 40,
  },
  header: {
    backgroundColor: '#7EA42E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 3,
    marginHorizontal: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
  },
  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#7EA42E',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  university: {
    fontSize: 15,
    color: '#666',
    marginBottom: 2,
  },
  semester: {
    fontSize: 13,
    color: '#888',
  },
  servicesContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 4,
    marginHorizontal: 15,
    marginTop: 20,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  serviceButton: {
    backgroundColor: '#7EA42E',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  serviceRequest: {
    backgroundColor: '#E6F3D8',
    padding: 15,
    borderRadius: 15,
    elevation: 2,
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  requestDetail: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
  },
  requestDate: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  viewDetailsButton: {
    backgroundColor: '#558B2F',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  viewDetailsText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});
