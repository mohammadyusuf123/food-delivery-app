import { Fragment } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { images, offers } from "../constant/index";
import "./global.css";
export default function Index() {
  return (
   <SafeAreaView className="flex-1 bg-white">
    <View className="flex-row justify-between px-4 py-4 mt-10">
        <View className='flex-start '>
          <TouchableOpacity>
            <Text className="text-lg text-primary">Deliver to</Text>
            <View className="flex-row">
              <Text className="text-lg text-black">New York</Text>
              <Image
                source={images.arrowDown}
                className="size-3 m-2"
                alt=""
                resizeMode="contain"
                tintColor="#000"
              />
            </View>
          </TouchableOpacity>
        </View>
       <View className="flex-end bg-black rounded-full px-4 py-3 mr-3 relative">
        <Text className="text-white text-sm absolute -top-2 right-0 bg-primary rounded-full px-2 py-1">4</Text>
         <Image
          source={images.bag}
          className="size-6"
          alt=""
          resizeMode="contain"
          tintColor='#ffffff'
        />
       </View>
    </View>
    <FlatList 
      data={offers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => {
        const isEven = index % 2 === 0;
        return (
          <View>
            <Pressable
              className={`offer-card ${isEven ? 'flex-row-reverse' : 'flex-row'} rounded-lg p-4 mb-4`}
              style={{ backgroundColor: item.color }}
              android_ripple={{ color: "#ffff22" }}
            >
              {({ pressed }) => (
                <Fragment>
                  <View className={"h-full w-1/2"}>
                    <Image source={item.image} className="size-full" alt=""  resizeMode="contain"/>
                  </View>
                  <View className={`offer-card__info ${isEven? 'pl-2' : 'pr-2'} `}>
                    <Text className="h1-bold text-white leading-tight">{item.title}</Text>
                    <Image
                      source={images.arrowRight}
                      className="size-10"
                      alt=""
                      resizeMode="contain"
                      tintColor="#fffff"
                    />
                  </View>
                </Fragment>
              )}
            </Pressable>
          </View>
        );
      }}
      contentContainerStyle={{ padding: 16 }}
    />
   </SafeAreaView>
  );
}
