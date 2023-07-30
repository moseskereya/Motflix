import {useState, useEffect} from 'react'
import {View, Text, SafeAreaView, Platform, TouchableOpacity, ScrollView} from 'react-native'
import {StatusBar} from "expo-status-bar"
import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon } from "react-native-heroicons/outline"
const ios = Platform.ios == 'ios';
import Trendingmovies from './trendingmovies';
import MoviesList  from "./movieList"
import {useNavigation } from '@react-navigation/native';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomming, fetchcomedymoviesEndpoint, fetchdocumentariemoviesEndpoint, fetchhoromoviesEndpoint, fetchromanticmoviesEndpoint } from '../../api/movidb';
const Movies = () => {
    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [toprated, setToprated] = useState([])
    const [action, setAction] = useState([])
    const [comedy, setcomedy] = useState([])
    const [horo, sethoro] = useState([])
    const [romantic, setromantic] = useState([])
    const [documentaries, setdocumentaries] = useState([])
    
    const navigation =  useNavigation();

    useEffect(() =>{
        getTrending();
        getToprated();
        getUpcomming();
        getAction();
        getDocumentaries();
        getHoro();
        getRomantic();
        getComedy();
    }, []);

    const getTrending = async () => {
        const data = await fetchTrendingMovies();
        if(data && data.results) setTrending(data.results)
    }

    const getUpcomming = async () => {
        const data = await fetchUpcomming();
        if(data && data.results) setUpcoming(data.results)
    }

    const getToprated = async () => {
        const data = await fetchTopRatedMovies();
        if(data && data.results) setToprated(data.results)
    }

    const getAction = async () => {
        const data = await fetchTrendingMovies();
        if(data && data.results) setAction(data.results)
    }

    const getComedy = async () => {
        const data = await fetchcomedymoviesEndpoint();
        if(data && data.results) setcomedy(data.results)
    }

    const getHoro = async () => {
        const data = await fetchhoromoviesEndpoint();
        if(data && data.results) sethoro(data.results)
    }

    const getRomantic = async () => {
        const data = await fetchromanticmoviesEndpoint();
        if(data && data.results) setromantic(data.results)
    }

    const getDocumentaries = async () => {
        const data = await fetchdocumentariemoviesEndpoint();
        if(data && data.results) setdocumentaries(data.results)
    }


  return (
    <View className="flex-1 bg-neutral-800">
        <StatusBar translucent backgroundColor="transparent" />
        <SafeAreaView className={ios ? 'mbr-4' : 'mb-5'}>
            <View className="flex-row justify-between items-center mx-4">
                <Bars3CenterLeftIcon strokeWidth={1} size={30} color="orange"/>
                <TouchableOpacity  onPress={() => navigation.navigate('Search')}>
                    <MagnifyingGlassCircleIcon strokeWidth={1} size={30} color="white"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}>
           {trending.length> 0 && <Trendingmovies  data={trending} />}
           {upcoming.length> 0 &&  <MoviesList title="Upcomming"  data={upcoming}/>}
           {toprated.length > 0 && <MoviesList title="Top Rated" data={toprated}/>}
           {action.length> 0 && <MoviesList title="Action" data={action}/>}
           {comedy.length> 0 && <MoviesList title="Comedy" data={comedy} />}
           {documentaries.length> 0 &&  <MoviesList title="Documentaries" data={documentaries}/>}
           {horo.length > 0 && <MoviesList title="Horo" data={horo}/>}
           {romantic.length> 0 && <MoviesList title="Romantic" data={romantic}/>}
        </ScrollView>
    </View>
  )
}

export default Movies