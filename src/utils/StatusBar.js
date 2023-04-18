import React from 'react';
import { View, StatusBar,SafeAreaView,Text} from 'react-native';

import style from '../style';

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
<View>
<SafeAreaView style={[style.statusBar, { backgroundColor }]}>
   <StatusBar translucent backgroundColor='transparent' {...props}/>
</SafeAreaView>
</View>
);
export default GeneralStatusBarColor;