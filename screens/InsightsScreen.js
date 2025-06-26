import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../configs/firebase';


import { PieChart, BarChart } from 'react-native-chart-kit';

export default function FoodInsights() {
  const [insight, setInsight] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'insights', 'today');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInsight(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }, []);

  if (!insight) {
    return (
      <View style={styles.center}>
        <Text>Loading insights...</Text>
      </View>
    );
  }

  // Pie chart data
  const pieData = [
    { label: 'Wasted', percentage: 40, color: '#ff4d4d' },
    { label: 'Used', percentage: 60, color: '#ffd700' },
  ];

  // Bar chart data
  const barData = {
    labels: insight.items.map(item => item.name),
    datasets: [
      {
        data: insight.items.map(item => item.quantity),
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Today's Food Insights</Text>

      <PieChart
  data={[
    {
      name: 'Wasted',
      population: 40,
      color: '#ff4d4d',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Used',
      population: 60,
      color: '#ffd700',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]}
  width={Dimensions.get('window').width - 30}
  height={180}
  chartConfig={{
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  }}
  accessor={'population'}
  backgroundColor={'transparent'}
  paddingLeft={'15'}
  absolute
/>

      {/* Bar Chart */}
      <Text style={styles.subTitle}>Individual Food Waste (in units)</Text>
      <BarChart
        data={barData}
        width={Dimensions.get('window').width - 30}
        height={220}
        fromZero
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
          labelColor: () => '#000',
        }}
        style={styles.barChart}
      />

      {/* Insights */}
      <View style={styles.card}>
        <Text style={styles.insightText}>🔍 Most Wasted: {insight.mostWasted}</Text>
        <Text style={styles.suggestion}>💡 Suggestion: {insight.suggestion}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  legend: {
    marginTop: 10,
    alignItems: 'center',
  },
  barChart: {
    borderRadius: 10,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 40,
  },
  insightText: {
    fontSize: 16,
    marginBottom: 5,
  },
  suggestion: {
    fontSize: 15,
    color: 'green',
  },
});