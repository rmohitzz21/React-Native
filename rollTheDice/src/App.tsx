/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'

import DiceThree from '../assets/Three.png'

import DiceFour from '../assets/Four.png'

import DiceFive from '../assets/Five.png'

import DiceSix from '../assets/Six.png'


type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const Dice = ({imageUrl} : DiceProps):JSX.Element => {
  return (
    <view>
      <Image  style={styles.diceImage} source={imageUrl}/>
    </view>
  )
}

function App(): React.JSX.Element {


  return (
   
    <Text>
      Text is here
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});


export default App;
