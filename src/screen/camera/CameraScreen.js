import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import GeneralStatusBarColor from '../../utils/StatusBar';
const {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';


const CameraScreenMade = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#2c3e50'}}>
        <LinearGradient
          colors={['#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{
            height: height * 0.12,
          }}>
          <GeneralStatusBarColor />
        </LinearGradient>
      </View>
      <View style={{flex: 1}}>
       
      </View>
    </View>
  );
};

export default CameraScreenMade;
