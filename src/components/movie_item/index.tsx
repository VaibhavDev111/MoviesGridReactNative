import React from "react";
import { Image, View, Text } from "react-native";
import PostersImages from "../../assets/images/posters";
import MoviesItemStyles from "./style";

/**
 * used to render movie item
*/
function MovieItemView({ photo, text }) {
  return (
    <View style={MoviesItemStyles.root}>
      <Image
        style={MoviesItemStyles.image}
        source={PostersImages[photo.split(".", 1)]}
      />
      <Text numberOfLines={2} style={MoviesItemStyles.text}>
        {text}
      </Text>
    </View>
  );
}

export default React.memo(MovieItemView);
