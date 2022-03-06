import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DefaultText from '../defaultText'
import colors from '../../constants/colors'

const ItemDescription = ({itemInfo}) => {
    const descriptionList = ['Model','Model Name', "Model Type", "Cost", "Additional Description"]
    return (
        <View style={{width: '100%'}}>
        {
            descriptionList.map((item, index) => (
                <View 
                    key={item} 
                    style={{
                        flexDirection: index < descriptionList.length - 1 ? 'row': 'column',
                        marginVertical: 5,
                    }}
                >
                    <DefaultText textColor={colors.grayText} style={{flex: 1}}>{item}</DefaultText>
                    <DefaultText textColor={colors.blackText}>{itemInfo[`${item}`]}</DefaultText>
                </View>
            ))
        }
        </View>
    )
}

export default ItemDescription

const styles = StyleSheet.create({})