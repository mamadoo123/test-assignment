import React from 'react';
import {View} from 'react-native';
import RoundedBtn from '../roundedButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Font} from '../../constants/dimensions';
import colors from '../../constants/colors';
import DefaultText from '../defaultText';


const HeaderRight = (props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 10, elevation: 10}}>
        <RoundedBtn onPress={props.onPress} style={{borderColor: colors.green}} disabled={true} >
            <MaterialIcons 
                name="done" 
                size={Font * 20} 
                color={colors.green} 
                style={{backgroundColor: colors.white}} 
            />
        </RoundedBtn>
        <DefaultText textColor={colors.black} style={{fontSize: Font * 10, fontWeight: '700'}}>
            Process
        </DefaultText>
    </View>
  )
}

export default HeaderRight