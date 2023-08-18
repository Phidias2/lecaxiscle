import { View, Text } from "react-native-web";
import React, { useContext } from "react";

// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from "../context/AuthContext";
import { TabVisibilityProvider } from "../context/TabContext";
import AppLoader from "../components/AppLoader";

const AppNav = () => {
    const { isLoading, isConnected } = useContext(AuthContext)
    // if (isLoading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <AppLoader />
    //         </View>
    //     )
    // }
    return (
        <NavigationContainer>
            {isConnected === false ?
                <AuthStack /> :
                <TabVisibilityProvider>
                    < AppStack />
                </TabVisibilityProvider>
            }
        </NavigationContainer>
        // <NavigationContainer>
        //     {isConnected === false &&
        //         <TabVisibilityProvider>
        //            <ProfileScreen />
        //         </TabVisibilityProvider>
        //     }
        // </NavigationContainer>
    )
}

export default AppNav