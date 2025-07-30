import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
   <Tabs >
      <Tabs.Screen name="index" options={{ headerShown: false,
        tabBarLabel:"Home",
        tabBarIcon:({focused}) => focused ? <FontAwesome name="home" size={24} color="black" /> : <FontAwesome name="home" size={24} color="gray" />
       }} />
      <Tabs.Screen name="search" options={{ headerShown: false, 
        tabBarLabel:"Search",
        tabBarIcon:({focused}) => focused ? <FontAwesome name="search" size={24} color="black" /> : <FontAwesome name="search" size={24} color="gray" />
      }} />
      <Tabs.Screen name="cart" options={{ headerShown: false,
        tabBarLabel:"Cart",
        tabBarIcon:({focused}) => focused ? <FontAwesome name="shopping-bag" size={24} color="black" /> : <FontAwesome name="shopping-bag" size={24} color="gray" />,
        tabBarBadge:3
       }} 
       />
      <Tabs.Screen name="profile" options={{ headerShown: false,
        tabBarLabel:"Profile",
        tabBarIcon:({focused}) => focused ? <FontAwesome name="user" size={24} color="black" /> : <FontAwesome name="user" size={24} color="gray" />,
        tabBarBadge:3
       }} 
       />
   </Tabs>
  )
}

export default TabLayout