import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import ButtonOpacity from './components/ButtonOpacity';

import { background } from '../constants/images';

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
  image: { height: '100%', width: 390 },
});

const backgrounds = [
  {
    id: 1,
    title: 'Secured, forever.',
    description:
      'Nam sit amet nisl ut ipsum ullamcorper vulputate et at enim. Vestibulum nulla est, tincidunt et est pharetra consectetur.',
    img: background.welcome,
  },
  {
    id: 2,
    title: 'Secured, forever.',
    description: '',
    img: background.privacy,
  },
  {
    id: 3,
    title: 'Secured, forever.',
    description: '',
    img: background.encrypted,
  },
];

class Welcome extends React.PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <ScrollView
              horizontal
              pagingEnabled
              scrollEnabled
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
            >
              {backgrounds.map((item) => (
                <View
                  key={item.id}
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Image
                    source={item.img}
                    resizeMode="center"
                    style={styles.image}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.contentText}>
            <Text style={styles.titleContent} />
            <Text style={styles.textContent} />
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
