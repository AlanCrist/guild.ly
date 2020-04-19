import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class VPN extends React.PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <Text> VPN </Text>
      </View>
    );
  }
}

export default VPN;
