import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { app } from '../configs/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../configs/firebase';

const ProfileCard = () => {
  const navigation = useNavigation();
  const auth = getAuth(app);

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, 'user', 'user1');
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Auth', { screen: 'Login' });
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#7EA42E" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 50 }}>Could not load user data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Profile Summary */}
      <View style={styles.topCard}>
        <Ionicons name="person-circle-outline" size={60} color="#000" />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{userData.name || 'Name not provided'}</Text>
          <Text style={styles.university}>{userData.university || 'University not provided'}</Text>
          <Text style={styles.semester}>Semester-6 | 2024</Text>
        </View>
      </View>

      {/* Detailed Profile Card */}
      <View style={styles.detailCard}>
      <Image source={
        userData?.photoURL
      ? { uri: userData.photoURL }
      : require('../assets/student_photo.png') // <- local asset fallback
  }
  style={styles.profileImage}
/>
        <Text style={styles.name}>{userData.name || 'Name not provided'}</Text>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Staff Status:</Text>
          <Text style={styles.valueGreen}>Active</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Entry No:</Text>
          <Text style={styles.value}>{userData.entryNo || 'Not Provided'}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Position:</Text>
          <Text style={styles.value}>{userData.position || 'Not Provided'}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>University:</Text>
          <Text style={styles.value}>{userData.university || 'Not Provided'}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Working Experience:</Text>
          <Text style={styles.value}>{userData.experience || 'Not Provided'}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{userData.address || 'Not Provided'}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Medical History:</Text>
          <Text style={styles.value}>{userData.medicalHistory || 'No'}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{userData.age || 'Not Provided'}</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Feather name="settings" size={26} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Feather name="log-out" size={26} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  topCard: {
    backgroundColor: '#C5E1A5',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    margin: 15,
    borderRadius: 15,
    elevation: 5,
  },
  profileInfo: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  university: {
    fontSize: 16,
    color: '#333',
  },
  semester: {
    fontSize: 14,
    color: '#666',
  },
  detailCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#7EA42E',
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
    width: '45%',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    width: '55%',
    textAlign: 'right',
  },
  valueGreen: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50',
    width: '55%',
    textAlign: 'right',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#C5E1A5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 6,
  },
});
