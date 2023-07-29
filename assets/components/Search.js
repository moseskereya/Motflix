import React, {useState} from 'react'
import { View, Text , Dimensions, SafeAreaView, TextInput, Image ,TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get('window')


const Search = () => {
    const navigation = useNavigation();
    const [results, setresults] = useState([1,2,3,4,5,6,7,8,9,10]);
    const moviename = "The A Team ghrilrtblruiglgubrgyrgbruygb"
    
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
        <View  className="mx-4 flex-row justify-between items-center border-neutral-500 rounded-2xl">
            <TextInput placeholder='Search Movies' placeholderTextColor={'lightgray'} className="pb-1 pl-6 flex-1 font-semibold text-white tracking-wider"/>
            <TouchableOpacity className="rounded-full p3 m1 bg-neutral-500" onPress={() =>navigation.navigate('Home') }>
                <XMarkIcon  size={20} color="white"/>
            </TouchableOpacity>
        </View>
        {results.length> 0 ? (
              <ScrollView showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 15}} className="space-y-3">
                  <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
              <View className="flex-row justify-between flex-wrap">
                  {results.map((item, index) => {
                  return(
                      <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>
                          <View className="space-y-2 mb-4">
                              <Image className="rounded-3xl" style={{ width: width*0.44, height: height* 0.22}} source ={require('../images/moviesimg.jpg')}/> 
                              <Text className='text-white ml-1'>
                                  {moviename.length > 22? moviename.slice(0,22)+'...' : moviename}
                              </Text>
                          </View>
                      </TouchableWithoutFeedback>
                      )
                  })}
              </View>
              </ScrollView>
            ) : (
            <View className="flex-1 justify-center items-center">
                 <Image className="h-96 w-96 rounded-full" source ={require('../images/movietime.png')}/> 
            </View>
        )}
    </SafeAreaView>
  )
}

export default Search