import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Welcome extends React.PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <Text> Welcome </Text>
      </View>
    );
  }
}

export default Welcome;
