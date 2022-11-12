import HomeTbas from "./components/HomeTbas";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App(){
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={HomeTbas}
      options={{title:'Sistema de Ventas'}}>

      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
}
