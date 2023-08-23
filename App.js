import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from './assets/components/Movies';
import Movie from './assets/components/Movie';
import Search from './assets/components/Search';
import Person from './assets/components/Person';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home"  component={Movies} />
            <Stack.Screen name="Movie" options={{headerShown: false}} component={Movie} />
            <Stack.Screen name="Person"  component={Person} />
          </Stack.Navigator>
  </NavigationContainer>
  );
}

