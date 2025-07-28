import { Fragment } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { images, offers } from "../constant/index";
import "./global.css";
export default function Index() {
  return (
   <SafeAreaView>
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
            >
              {({ pressed }) => (
                <Fragment>
                  <View className={"h-full w-1/2"}>
                    <Image source={item.image} className="size-full" alt=""  resizeMode="contain"/>
                  </View>
                  <View className='offer-card__info'>
                    <Text className="h1-bold text-white leading-tight">{item.title}</Text>
                    <Image
                      source={images.arrowRight}
                      className="w-6 h-6 mt-2"
                      alt=""
                      resizeMode="contain"
                    />
                  </View>
                </Fragment>
              )}
            </Pressable>
          </View>
        );
      }}
    />
   </SafeAreaView>
  );
}
