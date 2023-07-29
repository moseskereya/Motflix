import { View, Text , Dimensions, SafeAreaView, TextInput, Image ,TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native'
import { useNavigation } from '@react-navigation/native'
const {width, height} = Dimensions.get('window')

const Cast = ({cast}) => {
    const moviename = "The A Team ghrilrtblruiglgubrgyrgbruygb"
    const navigation = useNavigation();
    
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
        {cast.length> 0 ? (
              <ScrollView showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 15}} className="space-y-3">
              <View className="flex-row justify-between flex-wrap">
                  {cast.map((item, index) => {
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

export default Cast