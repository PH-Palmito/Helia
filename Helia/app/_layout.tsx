import { Stack } from "expo-router";

export default function RootLayout() {
  return{
  <Tabs 
      screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundCollor: "#181a20",
      }
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#1ab65c",
      tabBarInactiveTintColor:"#757575",
    }}
  >
    <Tabs.Screen name= "index" options= {{
      tabBarIcon:({color}) =>(
        <house size={32} color={color} weight;"fill" />
      ),
    }}/>
    <Tabs.Screen name= "Search" />
    <Tabs.Screen name= "Booking" />
    <Tabs.Screen name= "Profile" />
    </tabs>
  };
}