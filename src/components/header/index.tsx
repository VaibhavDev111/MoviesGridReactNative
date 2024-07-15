import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import HeaderStyles from "./style";
import { Icons } from "../../assets/images/icons";
import { Strings } from "../../assets/strings";

/**
 * Header View with back and search option
*/
function HeaderView({
  onBackPress,
  onSearchPress,
  isSearch,
  searchValue,
  setSearchValue,
}) {
  return (
    <View style={HeaderStyles.root}>
      <Image style={HeaderStyles.nav_image} source={Icons.nav_bar} />
      <View style={HeaderStyles.components_root}>
        <Pressable onPress={onBackPress}>
          <Image style={HeaderStyles.icon_back} source={Icons.back} />
        </Pressable>
        {isSearch ? (
          <TextInput
            style={HeaderStyles.text_input}
            value={searchValue}
            onChangeText={setSearchValue}
            cursorColor={"white"}
            maxLength={15}
            placeholder={Strings.enter_text}
            placeholderTextColor={"cornsilk"}
          />
        ) : (
          <Text style={HeaderStyles.text_heading}>
            {Strings.romentic_comedy}
          </Text>
        )}
        <Pressable onPress={onSearchPress}>
          <Image style={HeaderStyles.icon_search} source={Icons.search} />
        </Pressable>
      </View>
    </View>
  );
}

export default HeaderView;
