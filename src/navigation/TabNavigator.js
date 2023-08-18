import React, { useState, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen.js';
import StatisticScreen from '../screens/StatisticScreen.js';
// import GameDetailsScreen from '../screens/GameDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ContactScreen from '../screens/ContactScreen';
import CouponScreen from '../screens/CouponScreen';
import HistoricScreen from '../screens/HistoricScreen';
import ContestScreen from '../screens/ContestScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MomentsScreen from '../screens/MomentsScreen';
import PassLockScreen from '../screens/PassCode';
import PolitiqueDeConfidentialite from '../screens/PolitiqueDeConfidentialite';
import { TabVisibilityContext } from '../context/TabContext';
import MentionLegale from '../screens/MentionLegale';
import GeneralInformation from '../screens/GeneralInformationScreen';
import ConditionVente from '../screens/ConditionDeVente';
import SuscribeScreen from '../screens/SuscribeScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { setIsTabVisible } = useContext(TabVisibilityContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='PassCode' component={PassLockScreen}
        options={{ headerShown: false }}
        listeners={{
          focus: () => setIsTabVisible(false),
          blur: () => setIsTabVisible(true)
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      /> */}
      <Stack.Screen
        name="Contest"
        component={ContestScreen}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: { backgroundColor: '#040d38' },
        })}
      />
      <Stack.Screen
        name="Suscribe"
        component={SuscribeScreen}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: { backgroundColor: '#040d38' },
        })}
      />
      <Stack.Screen
        name="Community"
        component={ContactScreen}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: { backgroundColor: '#040d38' },
        })}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={({ route }) => ({
          title: route.params?.title,
          headerShown: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: { backgroundColor: '#040d38' },
        })}
      />
      <Stack.Screen
        name='Politique'
        component={PolitiqueDeConfidentialite}
      />
      <Stack.Screen
        name='Mention'
        component={MentionLegale}
      />
      <Stack.Screen
        name='General'
        component={GeneralInformation}
      />
      <Stack.Screen
        name='Condition'
        component={ConditionVente}
      />
    </Stack.Navigator>

  );
};

const TabNavigator = () => {
  const { isTabVisible } = useContext(TabVisibilityContext);
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#0040AF' },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(isTabVisible),
            backgroundColor: '#0040AF', opacity: 0.8
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Coupon"
        component={CouponScreen}
        options={{
          // tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: 'yellow' },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Historic"
        component={HistoricScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="back-in-time" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const getTabBarVisibility = route => {
//   console.log(route);
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
//   // console.log(routeName);

//   if (routeName == 'PassCode') {
//     console.log("eeeeeee");
//     return 'none';
//   }
//   return 'flex';
// };
const getTabBarVisibility = (state) => {

  if (state == false) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
