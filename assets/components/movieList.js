import React,  { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity,  Dimensions, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import { fallbackMoviePoster, image185 } from '../../api/movidb'

const {width, height} = Dimensions.get('window')
const movieList = ({data, title}) => {
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
       <Text  className="text-white text-md mx-4 mb-5">{title}</Text>
       <TouchableOpacity>
        <Text style={{color:"orange"}} className="text-md">See All</Text>
       </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
        {data?.map((movie, index) => {
          return (
              <TouchableWithoutFeedback key={index}>
                <View className="space-y-2 mr-4">
                <Image source={{uri: image185(movie.poster_path) || fallbackMoviePoster}} 
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                  }}
                className="rounded-3xl"/>
               <Text className='text-white ml-1'>
                     {movie.title?.length > 22? movie.title.slice(0,22)+'...' : movie.title}
                  </Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
       </ScrollView>
    </View>
  )
}

export default movieList