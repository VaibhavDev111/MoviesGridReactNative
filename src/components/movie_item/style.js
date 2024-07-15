import { StyleSheet } from "react-native";
import { imageWidth } from "../../helper/constants";

/**
 * Styles for Movies Item View
*/
const MoviesItemStyles = StyleSheet.create({
  root: { padding: 5, paddingBottom: 20 },
  image: { width: imageWidth, height: imageWidth + 30 },
  text: { maxLength: 10, marginTop: 5, color: "white", width: imageWidth },
});

export default MoviesItemStyles;
