import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl={
            "https://www.mrojisan.net/cdn/shop/files/Screen_Shot_2021-06-22_at_8.24.23_PM_180x.png?v=1624407912"
          }
          title="Mr. Ojisan Neo Bar & Sushi"
          rating={5}
          genre="Japanese"
          address="1234 S King St"
          short_description="Best Japanese Restaurant in Hawaii"
          dishes={[]}
          long={999}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={
            "https://www.mrojisan.net/cdn/shop/files/Screen_Shot_2021-06-22_at_8.24.23_PM_180x.png?v=1624407912"
          }
          title="Mr. Ojisan Neo Bar & Sushi"
          rating={5}
          genre="Japanese"
          address="1234 S King St"
          short_description="Best Japanese Restaurant in Hawaii"
          dishes={[]}
          long={999}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl={
            "https://www.mrojisan.net/cdn/shop/files/Screen_Shot_2021-06-22_at_8.24.23_PM_180x.png?v=1624407912"
          }
          title="Mr. Ojisan Neo Bar & Sushi"
          rating={5}
          genre="Japanese"
          address="1234 S King St"
          short_description="Best Japanese Restaurant in Hawaii"
          dishes={[]}
          long={999}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
