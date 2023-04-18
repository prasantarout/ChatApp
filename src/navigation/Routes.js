import React, {useContext} from 'react';
import {Chat, ChatScreen, Message, SplashScreen,EditProfile,CameraScreenMade} from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 1],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 0.1],
          outputRange: [0, 0.1],
        }),
      },
    };
  },
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...MyTransition,
          animationEnabled: true,
        }}
        initialRouteName={'SplashScreen'}>
        <Stack.Screen name="Message" component={Message}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CameraScreenMade" component={CameraScreenMade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
