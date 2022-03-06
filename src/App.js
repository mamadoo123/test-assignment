import React from 'react';
import { HomeScreen, AssetInventoryScreen, ModelsListScreen, PersonScreen, ModelDetailsScreen } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import HeaderLeft from './components/header/headerLeft';
import colors from './constants/colors';
import HeaderRight from './components/header/headerRight';
import HeaderRightDetails from './components/header/headerRightDetails';
import {Height} from './constants/dimensions';
import { SafeAreaProvider } from 'react-native-safe-area-context';


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={'Home'}
          screenOptions={{
            headerLeft: (props) => <HeaderLeft {...props} />,
            headerStyle,
            headerTitleStyle: {marginTop: -10, marginLeft: -10}
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle:"Picture",
              headerRight: (props) => <HeaderRight {...props} />
            }}
          />
          <Stack.Screen
            name="AssetInventory"
            component={AssetInventoryScreen}
            options={{
              headerTitle: 'Assets Inventory'
            }}
          />
          <Stack.Screen
            name="ModelsList"
            component={ModelsListScreen}
            options={{
              headerTitle: "Model"
            }}
          />
          <Stack.Screen
            name="ModelDetails"
            component={ModelDetailsScreen}
            options={{
              headerTitle: "Model Details",
              headerRight: (props) => <HeaderRightDetails {...props} />
            }}
          />
          <Stack.Screen
            name="Person"
            component={PersonScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const headerStyle = {
  backgroundColor: colors.grayDark, 
  elevation: 15, 
  borderBottomWidth: 4, 
  height: Height * 0.1
}

export default App;