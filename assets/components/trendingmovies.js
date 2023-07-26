import React from 'react'
import {View, Text, Dimensions, Image, TouchableNativeFeedback} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get('window')

const trendingmovies = ({data}) => {
  const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie', item)
    }
  return (
    <View className="mb-8"> 
        <Text className="text-white text-xl mx-4 mb-5">Trending Movies</Text>
        <Carousel data={data} 
        renderItem={({item}) => <MovieCard item={item} handleClick={handleClick} />}  
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width* 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        />
    </View>
  )
}

export default trendingmovies

const MovieCard = ({item, handleClick}) => {
    return(
    <TouchableNativeFeedback onPress={() => handleClick(item)}>
        <Image source={require('../images/moviesimg.jpg')} 
           style={{
             width: width * 0.6,
             height: height * 0.4,
           }}
        className="rounded-3xl"
        />
    </TouchableNativeFeedback>
    )
}