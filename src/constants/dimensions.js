import { Dimensions } from "react-native";
const Dim = {
    Width: Dimensions.get('window').width,
    Height: Dimensions.get('window').height,
    Scale: Dimensions.get('window').scale,
    Font: Dimensions.get('window').fontScale
}

module.exports.Width = Dim.Width;
module.exports.Height =  Dim.Height;
module.exports.Scale = Dim.Scale;
module.exports.Font = Dim.Font;