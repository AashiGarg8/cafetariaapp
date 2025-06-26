import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServiceRequestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Service Request Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ServiceRequestScreen;