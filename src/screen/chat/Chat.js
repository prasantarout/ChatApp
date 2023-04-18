import { View, Text,SafeAreaView ,StyleSheet,Dimensions} from 'react-native'
const {height,width}=Dimensions.get('window')
import React from 'react'
import GeneralStatusBarColor from '../../utils/StatusBar'
const Chat = () => {
  return (
   
  <View style={{flex:1}}>
   <GeneralStatusBarColor backgroundColor="red"/>
    <View style={{flex:1,alignItems:'center',}}>
        <Text>hello</Text>
    </View>
  </View>
 
  )
}

export default Chat
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
     
    }
  });