import React, {useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TopImage } from '../../components/productDetails';
import colors from '../../constants/colors';
import { products } from '../../data/dummy/products';


const ModelDetailsScreen = ({navigation, route}) => {
  const product = products.find(p => p.id === route.params.productId);
 
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.body}>
        <TopImage imgSource={product.img} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  body:{
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: colors.grayDark
  }
})

export default ModelDetailsScreen