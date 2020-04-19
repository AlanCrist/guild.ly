import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ButtonOpacity from './components/ButtonOpacity';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    margin: 10,
  },
  started: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',

    margin: 10,
  },
  contentImage: {
    flex: 1,
    justifyContent: 'center',

    margin: 10,
  },
  image: {
    width: 30,
  },
  contentText: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 50,

    margin: 10,
  },
  titleContent: {
    fontSize: 20,
    marginBottom: 10,
  },
  textContent: {
    fontSize: 17,
    color: '#d0d0d0',
    textAlign: 'center',
  },
});

class Welcome extends React.PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <Text> Images. </Text>
          </View>
          <View style={styles.contentText}>
            <Text style={styles.titleContent}> Secured, forever. </Text>
            <Text style={styles.textContent}>
              Nam sit amet nisl ut ipsum ullamcorper vulputate et at enim.
              Vestibulum nulla est, tincidunt et est pharetra consectetur.
            </Text>
          </View>
        </View>
        <View style={styles.started}>
          <ButtonOpacity title="GET STARTED" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

export default Welcome;
