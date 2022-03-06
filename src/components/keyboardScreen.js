import React from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

const KeyboardScreen = ({children}) => {
  return (
    <KeyboardAvoidingView 
        keyboardVerticalOffset={{height: 100}} 
        style={{flex: 1}} 
        behavior={Platform.OS === 'ios' ? 'padding' : null}
    >

      <TouchableWithoutFeedback 
        onPress={() => Keyboard.dismiss() }
      >
        {children}
      </TouchableWithoutFeedback>
    
    </KeyboardAvoidingView>
  )
}

export default KeyboardScreen;