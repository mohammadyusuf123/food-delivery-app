import { Redirect, Slot } from 'expo-router';
import useAuthStore from "../../store/authStore";
const TabLayout = () => {
  const {isAuthenticated} = useAuthStore();
  if (!isAuthenticated) {
    return <Redirect to="/signin" />; // Render the auth slot if not authenticated
  }
  return <Slot/>
  //  <Tabs >
  //     <Tabs.Screen name="index" options={{ headerShown: false,
  //       tabBarLabel:"Home",
  //       tabBarIcon:({focused}) => focused ? <FontAwesome name="home" size={24} color="black" /> : <FontAwesome name="home" size={24} color="gray" />
  //      }} />
  //     <Tabs.Screen name="search" options={{ headerShown: false, 
  //       tabBarLabel:"Search",
  //       tabBarIcon:({focused}) => focused ? <FontAwesome name="search" size={24} color="black" /> : <FontAwesome name="search" size={24} color="gray" />
  //     }} />
  //     <Tabs.Screen name="cart" options={{ headerShown: false,
  //       tabBarLabel:"Cart",
  //       tabBarIcon:({focused}) => focused ? <FontAwesome name="shopping-bag" size={24} color="black" /> : <FontAwesome name="shopping-bag" size={24} color="gray" />,
  //       tabBarBadge:3
  //      }} 
  //      />
  //     <Tabs.Screen name="profile" options={{ headerShown: false,
  //       tabBarLabel:"Profile",
  //       tabBarIcon:({focused}) => focused ? <FontAwesome name="user" size={24} color="black" /> : <FontAwesome name="user" size={24} color="gray" />,
  //       tabBarBadge:3
  //      }} 
  //      />
  //  </Tabs>
  
}

export default TabLayout