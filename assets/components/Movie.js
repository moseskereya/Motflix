import { View, Text, ScrollView, Dimensions, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, {  useState , useEffect} from 'react'
import Cast from './Cast'
const {width, height} = Dimensions.get('window')

const Movie = () => {
 const {params: item} = useRoute();
 const [cast, setcast] = useState({})
 const [movie, setmovie] = useState({})
 useEffect(() => {
  const api_key = "fa1875db1f08a7d5f9887db721a0a94e"
  const movie_Id = item.id;
  fetch(`https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${api_key}&append_to_response=videos,images,credits`)
    .then(response => response.json())
    .then((data) => setmovie(data))
    console.log(movie)
 }, [itemId])


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
       <Cast cast={cast}/>
     </ScrollView>
    </View>
  )
}

export default Movie
