import { View, Text , Dimensions, SafeAreaView, Image ,TouchableOpacity, ScrollView} from 'react-native'
import { fallbackPersonImage, image185 } from '../../api/movidb'
const Cast = ({cast, navigation}) => {
  return (
    <View  className="my-6">
         <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
        {cast.length> 0 ? (
              <View className="flex-row justify-between flex-wrap">
                  {cast.map((person, index) => {
                  return(
                    <TouchableOpacity key={index} onPress={()=> navigation.navigate('Person', person)} className="mr-4 items-center">
                          <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                              <Image  className="rounded-2xl h-24 w-20" source={{uri: image185(person?.profile_path) || fallbackPersonImage}} /> 
                          </View>
                          <Text className="text-white text-xs mt-1">
                             {
                              person?.character.length>10? person.character.slice(0,10)+'...' : person?.character
                           }
                            </Text>
                          <Text className="text-neutral-200 text-xs">
                              {
                              person?.original_name.length>10? person.original_name.slice(0,10)+'...' : person?.original_name
                              }
                            </Text>
                      </TouchableOpacity>
                      )
                  })}
              </View>
            ) : (
            <View className="flex-1 justify-center items-center">
                 <Image className="h-96 w-96 rounded-full" source ={require('../images/movietime.png')}/> 
            </View>
        )}
    </ScrollView>
    </View>

  )
}

export default Cast