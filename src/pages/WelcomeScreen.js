import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Button from '../components/Button';

const Welcome = ({navigation}) => {
  const goToMember = () => {
    navigation.navigate('MemberSignScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kebab Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMember} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

export default Welcome;
