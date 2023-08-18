import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { BlurView } from 'expo-blur';
// import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from 'expo-checkbox';
import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import CustomButton from '../components/CustomButton';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';

const RegisterScreen = ({ navigation }) => {
  // const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isChecked, setChecked] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [country, setCountry] = useState('Benin')
  const [birthdate, setBirthdate] = useState(new Date())

  const validateEmail = () => {
    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = () => {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
      return true;
    } else {
      return false;
    }
  };

  const validateName = () => {
    if (/(?=.*[a-zA-ZÀ-ÿ])^[a-zA-ZÀ-ÿ]{3,15}$/.test(name)) {
      return true;
    } else {
      return false;
    }
  };

  const validateSurname = () => {
    if (/(?=.*[a-zA-ZÀ-ÿ])^[a-zA-ZÀ-ÿ]{3,15}$/.test(surname)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePasswordConfirm = () => {
    if (password === passwordConfirm) {
      return true;
    } else {
      return false;
    }
  };

  const storeUserInfo = (userId, name, surname, phone, whatsapp, birthdate, country) => {
    if (isChecked) {
      whatsapp = phone
    }
    const db = getDatabase();
    const userRef = ref(db, 'users/' + userId);
    const userData = {
      name: name,
      surname: surname,
      phone: phone,
      whatsapp: phone,
      birthdate: "",
      country: country,
    };

    set(userRef, userData)
      .then(() => {
        console.log('User information stored successfully!');
      })
      .catch((error) => {
        console.error('Error storing user information:', error);
      });
  };

  const handleSignUp = () => {
    if (validateEmail() && validatePassword() && validateName() && validateSurname() && validatePasswordConfirm()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          storeUserInfo(user.uid, name, surname, phone, whatsapp, birthdate, country);
          sendEmailVerification(user)
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }


  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Image source={require('../assets/images/stade.jpg')} style={[{ width: '100%', height: '100%', resizeMode: 'cover' }, StyleSheet.absoluteFill]} />
        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <BlurView intensity={50} style={{ padding: 30, borderRadius: 10 }}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 28,
                fontWeight: '800',
                color: '#fff',
                marginBottom: 30,
                textAlign: 'center'
              }}>
              S'inscrire
            </Text>

            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>
              <TouchableOpacity
                onPress={() => { }}
                style={{
                  borderColor: '#ddd',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { }}
                style={{
                  borderColor: '#ddd',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <Entypo
                  name="facebook-with-circle"
                  size={28}
                  color="#1674ea"
                  style={{ marginRight: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { }}
                style={{
                  borderColor: '#ddd',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <Entypo
                  name="twitter-with-circle"
                  size={28}
                  color="#1674ea"
                  style={{ marginRight: 5 }}
                />
              </TouchableOpacity>
            </View>

            <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
              Ou, s'enrégistrer avec email ...
            </Text> */}

            <InputField
              label={'Nom'}
              icon={
                <Ionicons
                  name="person-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              value={name}
              onChangeText={text => setName(text)}
            />

            <InputField
              label={'Prenom'}
              icon={
                <Ionicons
                  name="person-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              value={surname}
              onChangeText={text => setSurname(text)}
            />

            <InputField
              label={'Email'}
              icon={
                <MaterialIcons
                  name="email"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />

            <View
              style={{
                flexDirection: 'row',
                borderColor: '#ccc',
                borderWidth: 1,
                marginBottom: 15,
                borderRadius: 10,
                backgroundColor: '#ffffff90',
              }}>
              <PhoneInput
                // ref={phoneInput}
                // defaultValue={value}
                defaultCode="BJ"
                layout="first"
                placeholder='90000000'
                onChangeText={(text) => {
                  setPhone(text)
                }}
                onChangeCountry={(country) =>
                  setCountry(country)
                }
                containerStyle={{ backgroundColor: "transparent" }}
                textContainerStyle={{ backgroundColor: "transparent" }}
                autoFocus
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 15,
                padding: 10,

              }}>
              <Checkbox
                value={isChecked}
                onValueChange={() => setChecked(!isChecked)}
                color={isChecked ? "#4630EB" : undefined}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontWeight: 800 }}>C'est aussi mon numéro whatsapp</Text>
            </View>
            {isChecked == false ?
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  marginBottom: 15,
                  borderRadius: 10,
                  backgroundColor: '#ffffff90',
                }}>
                <PhoneInput
                  // ref={phoneInput}
                  // defaultValue={value}
                  defaultCode="BJ"
                  layout="first"
                  placeholder='90000000'
                  onChangeText={(text) => {
                    setWhatsapp(text)
                  }}
                  containerStyle={{ backgroundColor: "transparent" }}
                  textContainerStyle={{ backgroundColor: "transparent" }}
                  autoFocus
                />
              </View> : ''
            }
            <InputField
              label={'Mot de passe'}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              value={password}
              onChangeText={text => setPassword(text)}
              inputType="password"
            />

            <InputField
              label={'Confirmer mot de passe'}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              inputType="password"
              value={passwordConfirm}
              onChangeText={text => setPasswordConfirm(text)}
            />

            {/* <DateTimePicker 
              value={birthdate}
              is24Hour={true}
              mode='date'/> */}
            {/* <DatePicker

                style={{
                  
                }}

                date={birthdate}

                mode="date"

                placeholder="select date"

                format="DD/MM/YYYY"

                minDate="01-01-1900"

                maxDate="01-01-2040"

                confirmBtnText="Confirm"

                cancelBtnText="Cancel"

                customStyles={{

                  dateIcon: {
                    position: 'absolute',
                    left: 5,
                    top: -5,
                    marginLeft: 0,
                  },

                  dateInput: {
                    flexDirection: 'row',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 15,
                    borderRadius: 10,
                    backgroundColor: '#ffffff90',
                    flex:1,
                    paddingVertical:0,
                    outline: 'none'
                  },


                  placeholderText: {
                    fontSize: 17,
                    color: "gray"
                  },
                  dateText: {
                    fontSize: 17,
                  }
                }}
                onDateChange={(date) => {
                  setBirthdate(date);
                }}

              /> */}


            <CustomButton label={`S'enrégistrer`} onPress={handleSignUp} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text>Déjà un compte?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: '#fff', fontWeight: '700' }}> Se connecter</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </ScrollView >
    </SafeAreaView >
  );
};

export default RegisterScreen;
