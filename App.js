import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './src/navigation/Routes';
// import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  // const CustomGradientText = props => {
  //   return (
  //     <MaskedView maskElement={<Text {...props} />}>
  //       <LinearGradient
  //         colors={['#515BD4', '#8134AF', '#DD2A7B', '#F58529', '#FEDA77']}
  //         //colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}
  //         start={{x: 0.1, y: 0.1}}
  //         end={{x: 1, y: 0.9}}
  //         locations={[0.1072, 0.3019, 0.5242, 0.7545, 0.9088]}
  //         useAngle={true}
  //         angle={143.9}>
  //         <Text
  //           {...props}
  //           numberOfLines={1}
  //           style={[props.style, {opacity: 0}]}
  //         />
  //       </LinearGradient>
  //     </MaskedView>
  //   );
  // };

  return (
    <View style={styles.container}>
      {/* <CustomGradientText>
        <View style={{position: 'relative'}}>
          <Text style={styles.gradient}>GRADIENT TEXT</Text>
        </View>
      </CustomGradientText> */}
      <Routes/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
 
  gradient: {
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width:5, height:0},
    textShadowRadius:9,
    fontWeight: '900',
    fontSize:40,
    shadowOpacity: 0.1,
    letterSpacing: 2,
   
    // shadowColor:'#000'
    // position:'absolute'
  },
});

export default App;
