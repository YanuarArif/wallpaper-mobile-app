import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const dw = (pecentage: number) => {
  const width = deviceWidth;
  return (pecentage * width) / 100;
};

export const dh = (pecentage: number) => {
  const height = deviceHeight;
  return (pecentage * height) / 100;
};
