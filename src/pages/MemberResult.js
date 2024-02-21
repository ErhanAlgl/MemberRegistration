import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.header}>Kayıt Başarılı!</Text>
      <Text style={styles.label}>Üye Adı: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
      <Text style={styles.label}>Üye Doğum Tarihi: {user.userAge}</Text>
      <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
      <Text style={styles.label}>Üye Memleketi: {user.userHometown}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
    paddingBottom: 10,
    textAlign: 'center',
  },
});

export default MemberResult;
