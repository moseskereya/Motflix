import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Movie = () => {
 const {params: item} = useRoute();
 useEffect(() => {
    //this will fetch an pi from the mmdb movies
 }, [item])
  return (
    <View>
     <ScrollView contentContainerStyle={{paddingBottom:20}} className="flex-1 bg-neutral-900">
      <View className="w-full">
        <SafeAreaView  className="absolute z-20 w-full flex-row justify-between items-center px-3">
            <TouchableOpacity>

            </TouchableOpacity>
        </SafeAreaView>
      </View>
     </ScrollView>
    </View>
  )
}

export default Movie
