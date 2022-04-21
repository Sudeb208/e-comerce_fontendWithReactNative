import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/Home";
import ProductScreen from "./src/screens/ProductScreen";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import CartScreen from "./src/screens/Cart Screen";
import ThemeContext from "./src/context/themeContext";
import { useState } from "react";
import UpworkClone from "./src/screens/UpworkClone";
import Adress from "./src/screens/Adress";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Header from "./src/components/Header";
import HomeStack from "./src/routes/HomeStack";
import User from "./src/screens/UserScreen/User";
import UserStack from "./src/routes/UserStack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [trues, setTrues] = useState(false);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const changeColor = () => {
    setTrues(!trues);
  };
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar animated={true} backgroundColor="#3b7a65" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              header: () => <Header />,
              tabBarInactiveTintColor: "lightgray",
              tabBarActiveTintColor: "gray",
              tabBarShowLabel: false,
            }}
          >
            <Tab.Screen
              name="user"
              component={ProductScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="user-circle-o" color={color} size={20} />
                ),
              }}
            />
            <Tab.Screen
              name="home"
              component={HomeStack}
              options={{
                tabBarIcon: ({ color, size }: any) => (
                  <FontAwesome name="home" color={color} size={20} />
                ),
              }}
            />

            <Tab.Screen
              name="cart"
              component={CartScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="shopping-cart" color={color} size={20} />
                ),
              }}
            />
            <Tab.Screen
              name="upwork"
              component={UpworkClone}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="shopping-cart" color={color} size={20} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
