import { StyleSheet, Platform, View } from 'react-native'
import React from 'react'
import DefaultText from '../defaultText'
import colors from '../../constants/colors'

const NoteList = ({notes}) => {
  return (
    <View style={styles.container}>
        
        {
            Array.isArray(notes) && notes.map((note, index) => (
                <View 
                    key={note.id} 
                    style = {{
                        paddingTop: 3,
                        paddingBottom: 7, 
                        borderBottomColor: colors.grayDark, 
                        borderBottomWidth: index < notes.length -1 ? 1 : 0,
                        }}
                    >
                    
                    <DefaultText 
                        textColor={colors.black} 
                        style={{fontSize: 14, fontWeight: '600'}}
                    >
                        {note.author}
                    </DefaultText>
                    
                    <DefaultText 
                        textColor={colors.grayText} 
                        style={{fontSize: 12}}
                    >
                        {note.date.toString()}
                    </DefaultText>
                    
                    <DefaultText 
                        textColor={colors.black} 
                        style={{fontSize: 12}}
                    >
                        {note.content}
                    </DefaultText>
                </View>
            ))
        
        }
    </View>
  )
}

export default NoteList

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 16,
        marginTop: 5,
        elevation: 25,
    }
})