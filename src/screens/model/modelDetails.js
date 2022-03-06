import React, {useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TopImage, DropdownBtn } from '../../components/productDetails';
import ItemDescription from '../../components/productDetails/itemDescription';
import colors from '../../constants/colors';
import { products } from '../../data/dummy/products';


const ModelDetailsScreen = ({navigation, route}) => {
  const product = products.find(p => p.id === route.params.productId);
 
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.body}>
        <TopImage imgSource={product.img} />
        
        <DropdownBtn title={"Image Info"}>
          <ItemDescription itemInfo={product.imgInfo} />
        </DropdownBtn>

        <DropdownBtn title={"Notes"} />
        
      </View>
    </ScrollView>
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
  }
})

export default ModelDetailsScreen