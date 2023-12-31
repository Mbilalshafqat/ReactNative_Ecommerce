import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  BackHandler,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Headline, Searchbar, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { products } from "../StaticData/StaticData";

const SearchBox = () => {
  const data = products && products;
  const navigate = useNavigation();
  const [SearchQuery, setSearchQuary] = useState("");
  const GoBack = () => {
    navigate.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", GoBack);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", GoBack);
    };
  }, []);
  // onPress={() => setSearchActive(false)
  return (
    <>
      <View
        style={{
          ...styles.searchBox,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        {/* ====================================================== */}
        <View>
          <Searchbar
            placeholder="Search..."
            onChangeText={(value) => setSearchQuary(value)}
            style={{ width: "95%", marginHorizontal: 10, marginVertical: 20 }}
          />
        </View>
        {/* ---------------------- show All Data  */}
        <ScrollView>
          {data &&
            data.map((item) => {
              return (
                <View
                  key={item._id}
                  style={{
                    backgroundColor: "white",
                    marginVertical: 20,
                    marginHorizontal: 5,
                    padding: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Image
                    source={{
                      uri:
                        item &&
                        item.images &&
                        item.images[item.images.length - 1].url,
                    }}
                    style={{ height: 80, width: 80 }}
                  />
                  <View>
                    <Text>{item.name.slice(0, 70)}...</Text>
                    <Headline>${item.discountPrice}</Headline>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
    flex: 1,
    backgroundColor: "#112A45",
  },
});

export default SearchBox;
