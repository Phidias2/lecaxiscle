import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext()
import { auth, db } from "../../firebase";
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { ref, onValue } from 'firebase/database';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isConnected, setIsConnected] = useState(false)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {

        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setIsLoading(false)
            if (user) {
                if (!user.emailVerified) {
                    setIsConnected(true)
                    try {
                        let userInfo = await AsyncStorage.getItem('userInfo')
                        userInfo = JSON.parse(userInfo)
                        setUserInfo(userInfo)
                        console.log(userInfo);
                    }
                    catch{
                        
                    }
                }
                else {
                    console.log(11111,user);
                }
            }
        })

        return unsubscribe
    }, [])

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userRef = ref(db, `user/${user.uid}`);

                onValue(userRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        const formsArray = Object.values(data);
                        setUserInfo(formsArray)
                        console.log(userInfo);
                        AsyncStorage.setItem('userInfo', JSON.stringify(formsArray))
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setIsConnected(false)
                setIsLoading(false)
                AsyncStorage.removeItem('userInfo')
            })
            .catch(error => alert(error.message))
    }

    return (
        <AuthContext.Provider value={{ handleSignOut, handleSignIn, isConnected, isLoading,userInfo }}>
            {children}
        </AuthContext.Provider>
    )
}