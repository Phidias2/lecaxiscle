import React, { useState, useEffect, useContext } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BlurView } from 'expo-blur';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             if (user.emailVerified) {
    //                 navigation.replace("Home")
    //             }
    //             else {
    //                 console.log(user);
    //             }
    //         }
    //     })

    //     return unsubscribe
    // }, [])
    const { handleSignIn } = useContext(AuthContext)
    // const handleSignIn = () => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorMessage);
    //         });
    // }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={require('../assets/images/stade.jpg')} style={[{ width: '100%', height: '100%', resizeMode: 'cover' }, StyleSheet.absoluteFill]} />
            <View style={{ paddingHorizontal: 25 }}>
                <BlurView intensity={80} style={{padding:10, borderRadius:10}}>
                    <Text style={{
                        fontFamily: 'Roboto-Medium', fontSize: 28,
                        fontWeight: '800', color: "#333", marginBottom: 30, textAlign:'center'
                    }}>
                        Login
                    </Text>
                    {/* <Image source={require('../assets/images/logo.png')} style={{width:50, height:50, justifyContent:'center', alignSelf:'center'}}/> */}
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
                        keyboardType="email-address"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <InputField
                        label={'Password'}
                        icon={
                            <Ionicons
                                name="ios-lock-closed-outline"
                                size={20}
                                color="#666"
                                style={{ marginRight: 5 }}
                            />
                        }
                        inputType="password"
                        // fieldButtonLabel={"Mot de passe oublié?"}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <CustomButton label={"login"} onPress={() => handleSignIn(email, password)} />
                    {/* <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                        Ou, connectez vous avec ...
                    </Text>
                    <View
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
                                borderRadius: 40,
                                paddingHorizontal: 30,
                                paddingVertical: 10,
                            }}>
                            <Image source={require('../assets/images/google.png')} style={{ width: 24, height: 24, borderRadius: 25 }} />
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
                            <Image source={require('../assets/images/telegram.png')} style={{ width: 24, height: 24 }} />
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
                            <Image source={require('../assets/images/facebook.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                    </View> */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 30,
                        }}>
                        <Text>Pas encore inscrit ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ color: '#fff', fontWeight: '700' }}> S'inscrire</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen