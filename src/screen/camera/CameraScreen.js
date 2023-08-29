import React from 'react';
import {View, Dimensions} from 'react-native';
import GeneralStatusBarColor from '../../utils/StatusBar';
const {height, width} = Dimensions.get('window');
// import LinearGradient from 'react-native-linear-gradient';
import Svg, {
  LinearGradient,
  Text,
  Defs,
  Stop,
  TSpan
} from 'react-native-svg';

const CameraScreenMade = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#2c3e50'}}>
        {/* <LinearGradient
          colors={['#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{
            height: height * 0.12,
          }}> */}
          <GeneralStatusBarColor />
        {/* </LinearGradient> */}
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Svg viewBox="0 0 300 300" height="300"
             width="300">
          <Defs>
            <LinearGradient id="rainbow" x1="0.1" x2="1" y1="0.1" y2="0.9"  >
              <Stop stopColor="#515BD4" offset="0%" />
              <Stop stopColor="#8134AF" offset="20%" />
              <Stop stopColor="#DD2A7B" offset="40%" />
              <Stop stopColor="#F58529" offset="60%" />
              <Stop stopColor="#FEDA77" offset="80%" />
            </LinearGradient>
          </Defs>
          <Text 
            fill="url(#rainbow)" 
            stroke="blue"
            fontSize="12"
            fontWeight="900"
            strokeWidth="0.4"
            x="102"
            y="72"
          >
            <TSpan
            >
           GROSSING
            </TSpan>
          </Text>
        </Svg>
        </View>
    </View>
  );
};

export default CameraScreenMade;
