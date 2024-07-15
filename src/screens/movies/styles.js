import { StyleSheet } from "react-native";
import {
  loaderRightMargin,
  loaderTopMargin,
  noDataRightMargin,
} from "../../helper/constants";

/**
 * Styles for movies grid screen.
*/
const MoviesStyles = StyleSheet.create({
  loaderRoot: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: loaderRightMargin,
    top: loaderTopMargin,
  },
  noDataRoot: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: noDataRightMargin,
    top: loaderTopMargin,
  },
  flatlist: { flex: 1, padding: 5 },
  root: { flexGrow: 1 },
  list_header: { height: 50 },
  no_data_text: { color: "white", fontSize: 20 },
});

export default MoviesStyles;
