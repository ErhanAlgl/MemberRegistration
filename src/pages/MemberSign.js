import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Input from '../components/Input/';
import Button from '../components/Button/';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
      Alert.alert('Kebab Fitness Salonu', 'Lütfen tüm alanları doldurunuz.');
      return;
    }
    const user = {userName, userSurname, userAge, userMail, userHometown};

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üye adı giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye soyadı giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Doğum Tarihi"
        placeholder="Üye doğum tarihi giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-Posta"
        placeholder="Üye e-posta giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Doğum Yeri"
        placeholder="Üye doğum yeri giriniz..."
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
