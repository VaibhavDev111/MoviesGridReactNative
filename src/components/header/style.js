import { StyleSheet } from "react-native";

/**
 * Styles for header
*/
const HeaderStyles = StyleSheet.create({
  root: { position: "absolute", top: 0, left: 0, right: 0 },
  nav_image: { position: "absolute", top: 0, left: 0, height: 60 },
  components_root: {
    flexDirection: "row",
    height: "auto",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon_back: {
    height: 25,
    width: 25,
    alignSelf: "center",
    marginRight: 10,
  },

  icon_search: {
    height: 25,
    width: 25,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginRight: 10,
  },

  text_heading: {
    justifyContent: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 20,
    flex: 1,
  },

  text_input: {
    flex: 1,
    borderBottomColor: "white",
    borderWidth: 1,
    color: "white",
  },
});

export default HeaderStyles;
