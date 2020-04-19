import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: { paddingVertical: 10, paddingHorizontal: 45, borderRadius: 20 },
  buttonOutlined: {
    borderColor: Colors.dimgray,
    borderWidth: 1,
  },
  buttonBackground: {
    backgroundColor: '#2196f3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    margin: 8,
  },
});

class ButtonOpacity extends React.PureComponent {
  render() {
    const { title, onPress, outlined = false } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.button,
            outlined ? styles.buttonOutlined : styles.buttonBackground,
          ]}
        >
          <Text
            style={{
              fontSize: 15,
              color: outlined ? Colors.black : Colors.white,
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ButtonOpacity;
