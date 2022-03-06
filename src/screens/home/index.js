import React from 'react'
import { View, StyleSheet } from 'react-native'
import HomeButton from '../../components/homeButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {Font, Height} from '../../constants/dimensions';

const HomeScreen = ({navigation}) => {
  const iconProps = {
    size: Font * 20, 
    color: colors.black, 
    style: {marginRight: 8} 
  }
  return (
    <View style={styles.screen}>
      <HomeButton
        title = "Assets Inventory"
        iconComponent={ 
          <Ionicons 
            name="md-browsers-outline" 
            {...iconProps} 
          />
        } 
        handler = {() => navigation.navigate('AssetInventory')}
        otherStyles={{
          marginBottom: Height * 0.03
        }}
      />

      <HomeButton
        title = "Model"
        iconComponent={
          <Ionicons 
            name="md-bar-chart-outline" 
            {...iconProps} 
          />
        }
        handler = {() => navigation.navigate('ModelsList')}
        otherStyles={{
          marginBottom: Height * 0.03
        }}  
      />

      <HomeButton
        title = "Person" 
        iconComponent={ 
          <MaterialIcons 
            name="person-search" 
            {...iconProps} 
          />
        }
        handler = {() => navigation.navigate('Person')}
        otherStyles={{
          marginBottom: Height * 0.03
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1, 
    alignItems: 'center', 
    paddingTop: Height * 0.05, 
    backgroundColor: colors.white
  }
})

export default HomeScreen