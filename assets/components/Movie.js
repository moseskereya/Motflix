import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
const {width, height} = Dimensions.get('window')

const Movie = () => {
 const {params: item} = useRoute();
 useEffect(() => {
    //this will fetch an pi from the mmdb movies
 }, [item])
  return (
    <View  contentContainerStyle={{paddingBottom:20}} className="flex-1 bg-neutral-900">
     <ScrollView>
       <Image source={require('../images/moviesimg.jpg')} style={{width: width, height: height * 0.45}}/>
       <View style={{marginTop: -(height*0.09)}} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          The Exoendables 3
        </Text>
        <Text className="text-white font-semibold text-base text-center">
          12/03/1995
        </Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-white font-semibold text-base text-center">Action .</Text>
          <Text className="text-white font-semibold text-base text-center">Comedy .</Text>
          <Text className="text-white font-semibold text-base text-center">Thrill .</Text>
        </View>
        <Text className="text-neutral-400 tracking-wide mx-4 my-2 font-light">
        In the thrilling action-adventure film "A Tem Movie," a young archaeologist, Dr. Amelia Turner, stumbles upon an ancient artifact rumored to possess mystical powers capable of reshaping the world. Obsessed with discovering its secrets, Amelia embarks on an epic journey across uncharted territories and perilous landscapes.
        </Text>
       </View>
     </ScrollView>
    </View>
  )
}

export default Movie
