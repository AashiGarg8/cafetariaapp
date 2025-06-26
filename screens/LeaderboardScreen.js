import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
     {/* {/* Header */}
      <View style={styles.header}>
       
        <Text style={styles.headerTitle}></Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.content}>

        {/* Badge Point Card */}
        <View style={styles.badgeCard}>
          <Ionicons name="person-circle-outline" size={50} color="black" />
          <View>
            <Text style={styles.badgeTitle}>Your Badge Point</Text>
            <Text style={styles.badgeDetail}>678</Text>
            <Text style={styles.badgeDetail}>Semester-6 | 2024</Text>
          </View>
        </View>

        {/* Top Students */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Top students wasting the least</Text>
          <View style={styles.studentList}>
            <View>
              <Text>Amir Hasan</Text>
              <Text>Edward Lree</Text>
              <Text>Mathew conn</Text>
              <Text>Shruti bharadwaj</Text>
            </View>
            <View>
              <Text>Jesus Napoli</Text>
              <Text>Ediana Nikal</Text>
              <Text>Nikole Adward</Text>
              <Text>Aashi Garg</Text>
            </View>
          </View>

          {/* Rank */}
          <Text style={styles.rankText}>
            You Rank - <Text style={{ color: 'green' }}>451/4000</Text>
          </Text>

          {/* Badge Points Section */}
          <View style={styles.badgePoints}>
            <Text style={styles.badgeText}>2000-- 🥈 you can get a item worth 100</Text>
            <Text style={styles.badgeText}>1000-- 🥇 you can get a item worth 200</Text>
            <Text style={styles.badgeText}>500++ 🥉 you can get a item worth 500</Text>
            <Text style={styles.badgeText}>500-- 🏅 you can get a item worth 4000</Text>
          </View>

          {/* Congratulations */}
          <Text style={styles.congratsText}>🎉 Congrnatulations</Text>
          <Text style={{ textAlign: 'center', marginBottom: 10 }}>You Are Under 1000</Text>

          {/* Button */}
          <TouchableOpacity style={styles.rewardButton}>
            <Text style={styles.buttonText}>Claim Your Reward !!!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={28} />
        <Ionicons name="settings-outline" size={28} />
        <Ionicons name="person-outline" size={28} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
  },
  header: {
    backgroundColor: '#b7df4b',
    padding: 16,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 12,
  },
  badgeCard: {
    backgroundColor: '#88bd52',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  badgeDetail: {
    fontSize: 14,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  studentList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  rankText: {
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  badgePoints: {
    marginBottom: 12,
  },
  badgeText: {
    marginBottom: 6,
  },
  congratsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 6,
  },
  rewardButton: {
    backgroundColor: '#b7df4b',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#b7df4b',
    paddingVertical: 12,
  },
});