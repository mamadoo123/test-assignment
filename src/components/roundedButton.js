import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';


function RoundedBtn({onPress, children, style, ...rest}){
    return(
        <TouchableOpacity 
            style={{...styles.btn, ...style}} 
            onPress={onPress}
            hitSlop = {{top: 10, bottom: 10, left: 10, right: 10}}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}

export default RoundedBtn;

const styles = StyleSheet.create({
    btn:{
        width: 36,
        height: 36,
        padding: 0,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.black,
        borderWidth: 1,
    },
})