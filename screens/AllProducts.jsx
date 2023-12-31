import { View, Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Avatar, Headline } from "react-native-paper";
import { products } from "../Components/StaticData/StaticData";
import ColumnAllProductView from "../Components/AllProductView/ColumnAllProductView";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";

const AllProducts = () => {
  const AllpRoductData = products;

  const navigate = useNavigation();
  const goback = () => {
    navigate.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", goback);

    return BackHandler.removeEventListener("hardwareBackPress", goback);
  }, []);

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: 20,
      }}
    >
      <Headline
        style={{
          marginVertical: 10,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Total Product : {AllpRoductData && AllpRoductData.length}
      </Headline>

      <View>
        <FlatList
          data={AllpRoductData}
          renderItem={({ item, index }) => {
            return <ColumnAllProductView item={item} i={index} key={index} />;
          }}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};

export default AllProducts;
