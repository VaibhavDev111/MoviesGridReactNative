import { Dimensions } from "react-native";

/**
 * margin from right, left , after first and second column is 10 each, All these 4 margins 
 * makes 40. Reducing 40 from screen width and dividing it by 3 because we have three columns.
 * After all this imageWidth finally gets the width of one image which fits in the screen.  
 */
export const imageWidth = (Dimensions.get("screen").width - 40) / 3;
/**
 * Loader margin from right side in absolute position
 */
export const loaderRightMargin = Dimensions.get("screen").width / 2;
/**
 * Loader margin from top side in absolute position
 */
export const loaderTopMargin = Dimensions.get("screen").height / 2;
/**
 * no data view margin from right side in absolute position
 */
export const noDataRightMargin = Dimensions.get("screen").width / 3;

export const empty_string = "";
