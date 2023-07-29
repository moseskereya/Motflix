import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from './assets/components/Movies';
import Movie from './assets/components/Movie';
import Search from './assets/components/Search';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Movies} />
            <Stack.Screen name="Movie" component={Movie} />
            <Stack.Screen name="Search" component={Search} />
          </Stack.Navigator>
  </NavigationContainer>
  );
}

