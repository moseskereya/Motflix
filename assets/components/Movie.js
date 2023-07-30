import { View, Text, ScrollView, Dimensions, Image} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import React, {  useState , useEffect} from 'react'
import Cast from "./Cast"
import Spinner from "./Loading"
import { fallbackMoviePoster, image500 } from '../../api/movidb'
import Movieslist from "./movieList"
const {width, height} = Dimensions.get('window')

const Movie = () => {
 const {params: itemId} = useRoute();
 const navigation = useNavigation();
 const [casts, setCasts] = useState([])
 const [movie, setMovie] = useState({})
 const [similarmovies, setSimilarmovies] = useState([])


 useEffect(() => {
  const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
  const movie_Id = itemId.id;
  const apiBaseUrl  =  "https://api.themoviedb.org/3";

  fetch(`${apiBaseUrl}/movie/${movie_Id}?api_key=${api_key}&append_to_response=videos,images,credits`)
    .then(response => response.json())
    .then(data => setMovie(data));

  fetch(`${apiBaseUrl}/movie/${movie_Id}/credits?api_key=${api_key}`)
    .then(response => response.json())
    .then(data => {
      setCasts(data.cast);
    })
    .catch(error => {
      console.error("Error fetching cast data:", error);
    });

    fetch(`${apiBaseUrl}/movie/${movie_Id}/similar?api_key=${api_key}`)
    .then(response => response.json())
    .then(data => {
      setSimilarmovies(data.results);
    })
    .catch(error => {
      console.error("Error fetching cast data:", error);
    });
}, [itemId]);


if (!movie || casts.length === 0){
  return <Spinner/>
}else{
  return (
    <View  contentContainerStyle={{paddingBottom:20}} className="flex-1 bg-neutral-900">
     <ScrollView>
      <View>
      <Image  source={{uri: image500(movie?.poster_path) || fallbackMoviePoster}} 
      style={{width: width, height: height * 0.4, borderBottomLeftRadius: 40}}/>
       <View style={{marginTop: -(height*0.09)}} className="space-y-3">
        <Text className="text-white text-center text-2xl font-bold tracking-wider">
         {movie.title}
        </Text>
        <Text className="text-white font-semibold text-base text-center">{movie?.release_date}</Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) =>{
            return(
              <Text className="text-orange font-semibold text-base text-center" style={{color: "orange"}} key={index}>{genre.name} | </Text> 
            )
          })}
        </View>
        <Text className="text-neutral-400 tracking-wide mx-4 my-2 font-light">{movie?.overview}</Text>
       </View>
      </View>
      {
        movie?.id && casts.length>0 && <Cast navigation={navigation} cast={casts} />
      }
      <Movieslist title="Similar Movies" data={similarmovies}/>
     </ScrollView>
    </View>
  )}

}

export default Movie
