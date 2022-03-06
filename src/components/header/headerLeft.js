import React from 'react';
import {View} from 'react-native';
import RoundedBtn from '../roundedButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Font} from '../../constants/dimensions';
import colors from '../../constants/colors';
import DefaultText from '../defaultText';


const HeaderLeft = (props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
        <RoundedBtn onPress={props.onPress} >
            <MaterialIcons 
                name="keyboard-backspace" 
                size={Font * 20} 
                color={colors.black} 
                style={{backgroundColor: colors.white}} 
            />
        </RoundedBtn>
        <DefaultText textColor={colors.black} style={{fontSize: Font * 10, fontWeight: '700'}}>
            Back
        </DefaultText>
    </View>
  )
}

export default HeaderLeft