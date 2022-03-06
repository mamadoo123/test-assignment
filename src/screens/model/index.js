import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'
import ProductItem from '../../components/productItem';
import colors from '../../constants/colors';
import {Width, Height, Font} from '../../constants/dimensions';
import { products } from '../../data/dummy/products';

const ModelsListScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  
  const renderItem = ({item})=>(
    <ProductItem 
      item={item} 
      onPress={() => navigation.navigate('ModelDetails', {productId: item.id})}
      title={item.name}
      imgSource = {item.img}
    />
  );

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder={"Type to Search"}
          value={searchValue}
          onChangeText={setSearchValue}
          placeholderTextColor={'#c4c4c4'}
        />
      </View>

      
      <View style={styles.body}>
        <FlatList 
          removeClippedSubviews
          contentContainerStyle={{flexGrow: 1,alignItems: 'center'}} 
          data={products} 
          renderItem={renderItem}
          numColumns={2}
          key={"Grid"}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  )
}

export default ModelsListScreen;

const styles = StyleSheet.create({
  screen:{
    flex: 1,  
    alignItems: 'center',
    backgroundColor: colors.background
  },
  body:{
    width: Width * 0.85,
  },
  input: {
    color: colors.black,
    borderWidth: 1,
    borderRadius: 25,
    width: '100%',
    height: Height * 0.07,
    paddingHorizontal: 20,
    marginVertical: 15,
    backgroundColor: colors.grayMedium,
    borderColor: colors.grayLight,
    elevation: 10
  },
  separator:{
    width: Width * 0.75, 
    height: 3, 
    backgroundColor: colors.grayDark,
    alignSelf: 'center',
  }
})