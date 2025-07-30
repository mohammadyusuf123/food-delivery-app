import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { images } from "../constant/index";

const CartButton = ({item}) => {
    
  return (
     <TouchableOpacity className="flex-end bg-black rounded-full px-4 py-3  relative">
        <Text className="text-white text-sm absolute -top-2 right-0 bg-primary rounded-full px-2 py-1">{item}</Text>
         <Image
          source={images.bag}
          className="size-6"
          alt=""
          resizeMode="contain"
          tintColor='#ffffff'
        />
       </TouchableOpacity>
  )
}

export default CartButton

const styles = StyleSheet.create({})