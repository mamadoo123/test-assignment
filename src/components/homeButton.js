import React from 'react';
import {TouchableOpacity ,StyleSheet, View } from "react-native";
import {Width, Height, Font} from '../constants/dimensions';
import colors from '../constants/colors';
import DefaultText from './defaultText';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeButton = ({title, iconComponent, fontSize, backgroundColor, textColor, handler, borderColor, borderWidth, disabled, otherStyles}) => (
    <TouchableOpacity 
        disabled={disabled}
        onPress = {handler} 
        style = {{
            ...styles.actionBtn, 
            backgroundColor: backgroundColor ? backgroundColor : colors.grayLight,
            borderWidth: borderWidth ? 1 : 0,
            borderColor: borderColor ? borderColor :colors.primary,
            ...otherStyles
            }} >
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                {iconComponent}
                <DefaultText 
                    textColor = {textColor ? textColor : colors.black} 
                    style = {{
                        fontSize: fontSize ? fontSize : Font * 20, 
                        fontWeight: '600'
                    }}
                >
                    {title}
                </DefaultText>
            </View>
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <MaterialCommunityIcon 
                    name="arrow-right-bold-outline" 
                    size={Font * 24} 
                    color={colors.green} 
                />
            </View>
        </View>
    </TouchableOpacity>
);

export default HomeButton;

const styles = StyleSheet.create({
    actionBtn: { 
        height: Height * 0.08, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 28,
        width: Width * 0.8,
        elevation: 10,
    }
})