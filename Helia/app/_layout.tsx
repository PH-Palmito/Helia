import { Tabs } from "expo-router";
import { House } from "phosphor-react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#181a20",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1ab65c",
        tabBarInactiveTintColor: "#757575",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <House size={32} color={color} weight="fill" />
          ),
        }}
      />
      <Tabs.Screen name="Search" />
      <Tabs.Screen name="Booking" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}





