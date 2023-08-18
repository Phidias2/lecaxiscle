import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native';
// import SInfo from 'react-native-sensitive-info';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { slides } from "../model/slide";
import AppIntroSlider from "react-native-app-intro-slider";
import { SIZES, height } from "../utils/Dimensions";
import { COLOR } from "../utils/Color";
import AsyncStorage from '@react-native-async-storage/async-storage';
const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center' },
  title: { textAlign: 'center', fontSize: 24, color: '#fff' },
  codeFieldRoot: { marginTop: 20, alignItems: 'center' },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#0040AF',
    borderRadius: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    color: "#fff"
  },
  focusCell: {
    borderColor: '#0040AF',
  },

});



const CELL_COUNT = 4;

const PassLockScreen = ({ navigation }) => {
  const getData = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log(e);
    }
  };
  const storeData = async (key,value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
};
  const firstTime = async () => {
    if (await getData('firstTime') === null) {
      return true
    }
    return false
  }
  const [value, setValue] = useState('');
  const [showHomePage, setshowHomePage] = useState(firstTime)
  const buttonLabel = ({ label }) => {
    <View style={{ padding: 12 }}>
      <Text style={{ fontWeight: "600", fontSize: SIZES.h4, color: COLOR.title }}>{label}</Text>
    </View>
  }
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handlePasscodeSubmit = async () => {
    const storedPasscode = await getData('passcode');
    // const storedPasscode = await SInfo.getItem('passcode', {});
    if (storedPasscode === null) {
      // await SInfo.setItem('passcode', value, {});
      await AsyncStorage.setItem('passcode', value);
      alert("Passcode enrégistré avec succès");
    } else {
      if (storedPasscode === value) {
        navigation.navigate('Home')
      } else {
        alert("Passcode incorrect!");
      }
    }
  };



  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, alignItems: 'center', padding: 15, paddingTop: 100 }}>
              <Image source={item.image} style={{ width: SIZES.width - 60, height: 400, resizeMode: "contain" }} />
              <Text style={{ fontWeight: 'bold', fontSize: SIZES.h1, color: COLOR.title }}>
                {item.title}
              </Text>
              <Text style={{ textAlign: 'center', paddingTop: 5, color: COLOR.title }}>{item.description}</Text>
            </View>
          )
        }
        }
        showSkipButton
        activeDotStyle={{ backgroundColor: COLOR.primary, width: 30 }}
        renderNextButton={buttonLabel("Next")}
        renderSkipButton={buttonLabel("Skip")}
        renderDoneButton={buttonLabel("Done")}
        onDone={() => {
          setshowHomePage(true)
          storeData('firstTime',true)
        }}
      />

    )
  }
  return (
    <SafeAreaView style={styles.root}>
      <Image source={require('../assets/images/stade.jpg')} style={[{ width: '100%', height: '100%', resizeMode: 'cover' }, StyleSheet.absoluteFill]} />
      <Text style={styles.title}>Entrez votre Pass code</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
        onBlur={handlePasscodeSubmit}
      />
    </SafeAreaView>
  );
};

export default PassLockScreen;

