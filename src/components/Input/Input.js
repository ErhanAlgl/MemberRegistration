import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './Input.style';

const Input = ({label, placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </View>
  );
};

export default Input;
