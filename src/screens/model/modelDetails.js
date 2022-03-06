import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { products } from '../../data/dummy/products';


const ModelDetailsScreen = ({navigation, route}) => {
  const product = products.find(p => p.id === route.params.productId);
  useEffect(() => {
    console.log('route params')
    console.log(route.params.productId)
  }, [])
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{product.name}</Text>
    </View>
  )
}

export default ModelDetailsScreen