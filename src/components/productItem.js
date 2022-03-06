import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import DefaultText from './defaultText'
import colors from '../constants/colors';
import {Width, Height, Font} from '../constants/dimensions';

const ProductItem = ({onPress, imgSource, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <View style={styles.imgWrapper}>
            <Image
                source={imgSource}
                width="40"
                height="40"
                resizeMode="contain"
                style={styles.image}
            />
        </View>
      </TouchableOpacity>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <DefaultText textColor={colors.black}>
              {title}
          </DefaultText>
      </View>
    </View>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
    container:{
        width: Width * 0.35, 
        margin: 15,
    },
    btn:{
        borderRadius: 25,
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        marginBottom: 5,
    },
    imgWrapper:{
        flex: 1, 
        width: '100%', 
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
    },
    image: {
        width: '80%', 
        height: '80%', 
    },
})