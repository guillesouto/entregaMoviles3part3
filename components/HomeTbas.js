import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Vendedor from "./Vendedor";
import Ventas from "./Ventas";
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

function HomeTbas(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:true,
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'purple',
                tabBarActiveBackgroundColor:'greenyellow'
            }}>
                <Tab.Screen
                    name="Vendedor"
                    component={Vendedor}
                    options={{title:'Vendedores', tabBarIcon:({color, size})=>
                    (
                    <Ionicons name="person" color={'green'} size={30} />
                    )
                    }}
                />



            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default HomeTbas;
/*            <Tab.Screen
                name="Ventas"
                component={Ventas}
                options={{title:'Ventas', tabBarIcon:({color, size})=>
                (
                <Ionicons name="cart" color={'purple'} size={30} />
                )
                }}
            />*/