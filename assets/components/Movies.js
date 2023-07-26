import {useState, useEffect} from 'react'
import {View, Text, SafeAreaView, Platform, TouchableOpacity, ScrollView} from 'react-native'
import {StatusBar} from "expo-status-bar"
import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon } from "react-native-heroicons/outline"
const ios = Platform.ios == 'ios';
import Trendingmovies from './trendingmovies';
import MoviesList  from "./movieList"
const Movies = () => {
    const [trending, setTrending] = useState([1,2,3,4,5,6,7,8,9,10])
    const [upcoming, setUpcoming] = useState([1,2,3,4,5,6,7,8,9,10])
    const [toprated, setToprated] = useState([1,2,3,4,5,6,7,8,9,10])

  return (
    <View className="flex-1 bg-neutral-800">
        <StatusBar style='light'/>
        <SafeAreaView className={ios ? 'mbr-4' : 'mb-5'}>
            <View className="flex-row justify-between items-center mx-4">
                <Bars3CenterLeftIcon strokeWidth={1} size={30} color="orange"/>
                <TouchableOpacity>
                    <MagnifyingGlassCircleIcon strokeWidth={1} size={30} color="white"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}>
            <Trendingmovies  data={trending} />
            <MoviesList title="Upcomming" data={upcoming}/>
            <MoviesList title="Top Rated" data={upcoming}/>
            <MoviesList title="Now Playing" data={upcoming}/>
        </ScrollView>
    </View>
  )
}

export default Movies