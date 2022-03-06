import React from 'react';
import { Text } from 'react-native';
import colors from '../constants/colors';
import Dim from '../constants/dimensions'

const { Font } = Dim;

const DefaultText = ({ textColor, isBold, style, children, numberOfLines, selectable, onPress }) => {
  return <Text onPress={onPress} selectable style={{
    color: textColor ? textColor : colors.white,
    //fontFamily: 'cocon-next-arabic',
    fontSize: isBold ? 20 * Font : 16 * Font,
    //fontWeight:isBold ? '700': 'normal',
    ...style
  }} numberOfLines={numberOfLines}>{children}</Text>
}

export default DefaultText;