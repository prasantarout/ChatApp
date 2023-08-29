import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import Message from '../screen/message/Message';
import {EditProfile, CameraScreenMade, Profile} from '../screen';
const BottomTab = () => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    let name = '';
    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        name = 'Home';
        break;
      case 'title2':
        icon = 'chatbubble-ellipses-outline';
        name = 'Chat';
        break;
      case 'title3':
        icon = 'ios-analytics-outline';
        name = 'Business';
        break;
      case 'title4':
        icon = 'person-outline';
        name = 'Account';
        break;
    }
    // rgba(232, 255, 243, 1)
    return (
      <View
        style={{
          backgroundColor: routeName === selectedTab ? 'blue' : null,
          borderRadius: 50,
          width: 35,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons
          name={icon}
          size={25}
          color={routeName === selectedTab ? 'rgba(124, 203, 162, 1)' : 'gray'}
        />
        {/* <Text style={{color:selectedTab ? 'rgba(0, 0, 0, 1)':'rgba(205, 205, 205, 1)',fontSize:10,fontWeight:'400'}}>{name}</Text> */}
      </View>
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate, name}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab, name)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={60}
      circleWidth={50}
      bgColor="white"
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Click Action')}>
            <Ionicons
              name={'add-sharp'}
              color="white"
              size={40}
              style={{fontWeight: 'bold'}}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
      screenOptions={{headerShown: false}}>
      <CurvedBottomBar.Screen
        name="title1"
        position="LEFT"
        component={() => <Message />}
      />
      <CurvedBottomBar.Screen
        name="title2"
        position="LEFT"
        component={() => <CameraScreenMade />}
      />
      <CurvedBottomBar.Screen
        name="title3"
        component={() => <EditProfile />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="title4"
        component={() => <EditProfile />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 53,
    height: 53,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `{['rgba(28, 117, 138, 1)','rgba(44, 143, 166, 1)']}`,
    bottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
});
