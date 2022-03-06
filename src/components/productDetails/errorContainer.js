import { StyleSheet, View } from 'react-native'
import DefaultText  from '../defaultText'
import React from 'react'
import colors from '../../constants/colors'

const ErrorContainer = ({errorMessage}) => {
  return (
    <View style={styles.container}>
        <DefaultText textColor={colors.danger}>
          {errorMessage}
        </DefaultText>
    </View>
  )
}

export default ErrorContainer

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
})