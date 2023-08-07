import { View, Dimensions, Image } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
const {width, height} =  Dimensions.get('window');

export default function Loading() {
  return (
    <View style={{height, width}} className="flex-row justify-center items-center">
      <Image source={require('../images/spinner.gif')} />
    </View>
  )
}