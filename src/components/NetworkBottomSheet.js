import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NetworkContainers from './NetworkContainers';

export default function NetworkBottomSheet() {
  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <Text style={styles.heading}>Network Fee</Text>
        <NetworkContainers
          networksName={'Standard'}
          imgsource={require('../assets/images/Clock.png')}
          coinQuantity={'0.0037ETH'}
          usdQuantity={'3.36usd'}
          time={'-30 Seconds'}
        />
          <NetworkContainers
          networksName={'Fast'}
          imgsource={require('../assets/images/star.png')}
          coinQuantity={'0.0076ETH'}
          usdQuantity={'10.30usd'}
          time={'-10 Seconds'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  Content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
  },
});
