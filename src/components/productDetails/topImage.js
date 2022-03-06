import React from 'react'
import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import {Width, Height} from '../../constants/dimensions';

const TopImage = ({imgSource}) => {
  return (
    <View style={styles.imageWrapper}>
      <View style={styles.shadow}>
        <Image 
          source={imgSource}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </View>
  )
}

export default TopImage

const styles = StyleSheet.create({
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  shadow:{
    height: 150,
    width: Width * 0.55,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .7)',
        shadowOffset: { height:0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        elevation: 10
      },
    }),
  },
  image: {
    height: 150,
    width: Width * 0.55,
    borderRadius: 20,
  },
})