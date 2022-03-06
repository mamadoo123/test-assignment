import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundedBtn from '../roundedButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Font} from '../../constants/dimensions';
import colors from '../../constants/colors';
import DefaultText from '../defaultText';


const HeaderRightDetails = (props) => {
  return (
    <View style={styles.container}>
        <RoundedBtn 
            onPress={props.onPress} 
            style={{width: 80}} 
            disabled={true} 
        >
            <View 
                style={{
                    flexDirection: 'row', 
                    alignItems: 'center', 
                }}
            >
                <MaterialIcons 
                    name="edit" 
                    size={Font * 20} 
                    color={colors.black} 
                    style={{backgroundColor: colors.white}} 
                />
                <DefaultText 
                    textColor={colors.black} 
                    style={{fontSize: Font * 14, marginLeft: 3 }}
                >
                    Edit
                </DefaultText>
            </View>
        </RoundedBtn>
    </View>
  )
}

export default HeaderRightDetails;

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 10
    }
})