import { View, Text,ImageBackground,StatusBar,StyleSheet, Dimensions} from 'react-native'
import React, { useEffect } from 'react'
 import logo from '../../assets/images/logo.png'
const {height,width}=Dimensions.get('window')
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 10 : StatusBar.currentHeight;


const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Message')
    },1000)
  },[])

  return (
    <>
    <View style={{flex:1}}>
    <ImageBackground
      imageStyle={{
        width:width,
        height:height
      }}
       source={logo}
    />
  </View>
  </>
  )
}

export default SplashScreen
const styles = StyleSheet.create({
    img: {
      height: "100%",
      width: "100%",
      
    },
  });
  