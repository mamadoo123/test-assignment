import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import DefaultText from '../../components/defaultText';
import KeyboardScreen from '../../components/keyboardScreen';
import { TopImage, DropdownBtn, NoteList, ItemDescription, ErrorContainer, SaveBtn } from '../../components/productDetails';
import colors from '../../constants/colors';
import {Height} from '../../constants/dimensions';
import { products } from '../../data/dummy/products';
import { Note } from '../../data/model/note';


const ModelDetailsScreen = ({navigation, route}) => {
  const product = products.find(p => p.id === route.params.productId);
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState(product.notes);

  const saveNote = () => {
    if(noteText.trim().length > 0){
      setNotes(
        [
          ...notes, 
          new Note(
            new Date().toString(), 
            "Mohamed Sayed", 
            new Date(), 
            noteText
          )
        ]
      )
    }
  }

  if(!product){
    return <ErrorContainer errorMessage={"Oops this item is no longer available"} />
  }
 
  return (
    <KeyboardScreen>
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.body}>
          
          <TopImage imgSource={product.img} />
          
          <DropdownBtn title={"Image Info"}>
            <ItemDescription itemInfo={product.imgInfo} />
          </DropdownBtn>

          <DropdownBtn 
            title={"Notes"} 
            isLast={true} 
          >
            <View style={{width: '100%', marginTop: 7,}}>
              <SaveBtn 
                onPress={saveNote} 
                style={styles.saveBtn} 
              />
              
              <TextInput
                style={styles.input}
                placeholder={"Add a Note..."}
                value={noteText}
                onChangeText={setNoteText}
                placeholderTextColor={'#c4c4c4'}
              />

              <DefaultText textColor={colors.black}>
                History Notes
              </DefaultText>

              <NoteList notes={notes} />
            </View>
          </DropdownBtn>
          
        </View>
      </ScrollView>
    </KeyboardScreen>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  body:{
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: colors.grayMedium,
    elevation: 3
  },
  saveBtn:{
    position: 'absolute',
    right: 16,
    top: -10,
  },
  input: {
    color: colors.black,
    borderWidth: 1,
    borderRadius: 25,
    width: '100%',
    height: Height * 0.06,
    paddingHorizontal: 20,
    marginVertical: 15,
    backgroundColor: 'white',
    borderColor: colors.grayLight,
    elevation: 4
  },
})

export default ModelDetailsScreen