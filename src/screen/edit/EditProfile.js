import React from 'react';
import {View, Text,Dimensions} from 'react-native';
import GeneralStatusBarColor from '../../utils/StatusBar';
const {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
const EditProfile = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <LinearGradient
          colors={['#486f62', '#264e54', '#324848', '#484c34']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{
            height: height * 0.12,
          }}>
          <GeneralStatusBarColor/>
        </LinearGradient>
      </View>
    </View>
  );
};

export default EditProfile;
