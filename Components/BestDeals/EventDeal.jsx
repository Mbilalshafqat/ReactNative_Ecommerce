import { View, Text, FlatList } from "react-native";
import React from "react";
import { AllEvents } from "../StaticData/AllEvents";
import AllProductView from "../AllProductView/AllProductView";

const EventDeal = () => {
  const thresholdSoldOut = 0; // Specify the threshold value here

  const bestDealProduct =
    AllEvents &&
    [...AllEvents]
      .filter((event) => event.sold_out > thresholdSoldOut)
      .sort((a, b) => b.sold_out - a.sold_out);

  const sliceBestDeals = bestDealProduct && bestDealProduct.slice(0, 10);
  return (
    <View style={{ paddingHorizontal: 10, marginBottom: 0 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          letterSpacing: 1,
          fontFamily: "Roboto",
          color: "#8C3333",
        }}
      >
        BestEvent
      </Text>

      {/* ----------------------- */}
      <View>
        {
          // map through the first ten product and display them
          sliceBestDeals && (
            <FlatList
              data={sliceBestDeals && sliceBestDeals}
              renderItem={({ item, index }) => {
                return <AllProductView key={item._id} data={item} i={index} />;
              }}
              keyExtractor={(item, index) => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )
        }
      </View>
    </View>
  );
};

export default EventDeal;
