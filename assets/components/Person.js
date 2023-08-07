import { View, Text, Image, TouchableOpacity, Platform, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import MovieList from "./movieList"
import { fallbackPersonImage, image342 } from '../../api/movidb';
import Spinner from '../components/Loading';

const ios = Platform.OS == 'ios';
var {width, height} = Dimensions.get('window');

export default function Person() {
    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [person, setPerson] = useState({});
    const [personMovies, setPersonMovies] = useState([]);

 useEffect(() => {
    const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
    const personId = item.id;
    const apiBaseUrl  =  "https://api.themoviedb.org/3";

    fetch(`${apiBaseUrl}/person/${personId}?api_key=${api_key}`)
      .then(response => response.json())
      .then(data => setPerson(data));
  
      fetch(`${apiBaseUrl}/person/${personId}/movie_credits?api_key=${api_key}`)
      .then(response => response.json())
      .then(data => {
        setPersonMovies(data.cast);
      })
      .catch(error => {
        console.error("Error fetching cast data:", error);
      });
  }, [item]);

  if (!person || personMovies.length === 0) {
    <Spinner/>
  } else {
    return (
        <ScrollView 
            className="flex-1 bg-neutral-900" 
            contentContainerStyle={{paddingBottom: 20}}>
                    <View>
                        <View 
                            className="flex-row justify-center"
                            style={{
                                shadowColor: 'gray',
                                shadowRadius: 40,
                                shadowOffset: {width: 0, height: 5},
                                shadowOpacity: 1,
                            }}
                        >
                            <View 
                            className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
                                <Image 
                                    source={{uri: image342(person?.profile_path) || fallbackPersonImage}}
                                    style={{height: height*0.43, width: width*0.74}}
                                />
                            </View>
                        </View>
                    
                        <View className="mt-6">
                            <Text className="text-3xl text-white font-bold text-center">
                                {person?.name}
                            </Text>
                            <Text className="text-neutral-500 text-base text-center">
                                {person?.place_of_birth}
                            </Text>
                        </View>
            
                        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold ">Gender</Text>
                                <Text className="text-neutral-300 text-sm">
                                    {
                                        person?.gender==1? 'Female': 'Male'
                                    }
                                </Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Birthday</Text>
                                <Text className="text-neutral-300 text-sm">
                                    {person?.birthday}
                                </Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">known for</Text>
                                <Text className="text-neutral-300 text-sm">
                                    {person?.known_for_department}
                                </Text>
                            </View>
                            <View className="px-2 items-center">
                                <Text className="text-white font-semibold">Popularity</Text>
                                <Text className="text-neutral-300 text-sm">
                                    {person?.popularity?.toFixed(2)} %
                                </Text>
                            </View>
                            
                        </View>
                        <View className="my-6 mx-4 space-y-2">
                            <Text className="text-white text-lg">Biography</Text>
                            <Text className="text-neutral-400 tracking-wide">
                                {
                                 person?.biography? person.biography : 'N/A'
                                }
                            </Text>
                        </View>
    
                        { person?.id && personMovies.length>0 && <MovieList title="Movies" hideSeeAll={true} data={personMovies} /> }
                    
                    </View>
        </ScrollView>
        
      )
  }

}