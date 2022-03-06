import React, {useState} from 'react'
import { StyleSheet, Text, View,  TouchableWithoutFeedback } from 'react-native'
import DefaultText from '../defaultText';
import colors from '../../constants/colors'

const DropdownBtn = ({children, title}) => {
    const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback
            onPress={() => setShow(!show)} 
            style={{width: '100%'}}
        >
            <View style={styles.btn}>
                <DefaultText textColor={colors.black}>
                    {title}
                </DefaultText>

               
                <DefaultText
                    textColor={colors.black} 
                    style={{transform:[{rotateX: show ?'180deg': '0deg'}]}} 
                >
                    v
                </DefaultText>
                
            </View>
        </TouchableWithoutFeedback>
        {
            show &&<View>{children}</View>
        }
    </View>
  )
}

export default DropdownBtn

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderColor: colors.grayDark,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    btn:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})