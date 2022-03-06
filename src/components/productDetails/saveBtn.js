import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesom from 'react-native-vector-icons/FontAwesome'
import DefaultText from '../defaultText'
import colors from '../../constants/colors'

const SaveBtn = ({style, onPress}) => {
  return (
    <TouchableOpacity
        onPress={onPress} 
        style={{...styles.saveBtn,...style}}
    >
        <View style={styles.wrapper}>
            <FontAwesom 
                name="save"
                color={colors.black}
            />
            <DefaultText textColor={colors.black} style={{fontSize: 12}}>
                Save
            </DefaultText>
        </View>
    </TouchableOpacity>
  )
}

export default SaveBtn

const styles = StyleSheet.create({
    saveBtn:{
    },
    wrapper:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        width: 45
    }
})