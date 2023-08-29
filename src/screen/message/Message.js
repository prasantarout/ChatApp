import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GeneralStatusBarColor from '../../utils/StatusBar';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../constant';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
const {height, width} = Dimensions.get('window');
const Message = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const MessageData = [
    {
      id: 1,
      name: 'Deepak',
      message: 'Hello Developer',
      timeStamp: '10/04/2023',
      path: image.logo1,
    },
    {
      id: 2,
      name: 'Rahul',
      message: 'Hii',
      timeStamp: 'Yesterday',
      path: image.logo2,
    },
    {
      id: 3,
      name: 'Siri',
      message: 'Hello...',
      timeStamp: '05/04/2023',
      path: image.logo3,
    },
    {
      id: 4,
      name: 'Satya',
      message: 'what are you doing',
      timeStamp: 'yesterday',
      path: image.user,
    },
    {
      id: 5,
      name: 'Srikanta',
      message: 'Hii',
      timeStamp: '10/04/2023',
      path: image.logo3,
    },
    {
      id: 6,
      name: 'Virat',
      message: 'Hii',
      timeStamp: '10/04/2023',
      path: image.logo2,
    },
    {
      id: 7,
      name: 'Sasanka',
      message: 'Are you mad !!!',
      timeStamp: 'yesterday',
      path: image.logo3,
    },
    {
      id: 8,
      name: 'Vinod',
      message: 'hii',
      timeStamp: '10/04/2023',
      path: image.logo1,
    },
    {
      id: 9,
      name: 'Ramkrishna',
      message: 'Hii',
      timeStamp: 'today',
      path: image.user,
    },
    {
      id: 10,
      name: 'Saban',
      message: 'Dhoni',
      timeStamp: '10/04/2023',
      path: image.logo2,
    },
    {
      id: 11,
      name: 'Ashok',
      message: 'He',
      timeStamp: '10/04/2023',
      path: image.logo1,
    },
    {
      id: 12,
      name: 'depak',
      message: 'Hello ',
      timeStamp: '10/04/2023',
      path: image.logo3,
    },
  ];

  const renderIcon = [
    {
      id: 1,
      name: 'camera',
      color: '#fff',
    },
    {
      id: 2,
      name: 'search',
      color: '#fff',
    },
    {
      id: 3,
      name: 'more-vertical',
      color: '#fff',
    },
  ];

  const ModalData = [
    {
      id: 1,
      name: 'New group',
    },
    {
      id: 2,
      name: 'New broadcast',
    },
    {
      id: 3,
      name: 'Linked devices',
    },
    {
      id: 4,
      name: 'Starred messages',
    },
    {
      id: 5,
      name: 'Payments',
    },
    {id: 6, name: 'Settings'},
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log('hello');
  };

  const handleClick = item => {
    if (item.name === 'camera') {
      console.log('hello camera');
    } else if (item.name === 'search') {
      console.log('hello search');
    } else if (item.name === 'more-vertical') {
      toggleModal();
    }
  };
  const RenderModal = () => {
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          useNativeDriver={true}
          animationInTiming={300}
          backdropOpacity={0.1}
          animationIn="fadeIn"
          animationOut="bounce"
          animationOutTiming={100}
          >
          <View
            style={{
              flex: 1,
              width: width / 2,
              maxHeight: height * 0.3,
              backgroundColor: 'white',
              borderRadius: 5,
              alignItems: 'flex-start',
              flexDirection: 'column',
              right:Platform.OS=='ios'? -15: -10,
              justifyContent: 'center',
              paddingHorizontal: 14,
              position: 'absolute',
              bottom:height*0.6299
            }}>
            {ModalData.map((item, index) => (
              <View style={{display: 'flex'}} key={index}>
                <TouchableOpacity
                  style={{
                    backgroundColor: item.color,
                    margin: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: 'grey',
                      textAlign: 'center',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <LinearGradient
          colors={['#486f62', '#264e54', '#324848', '#484c34']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{
            height: height * 0.2,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}>
          <GeneralStatusBarColor />
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              margin: 15,
              bottom:Platform.OS=='android' ? 1:50,
            }}>
            <View style={{}}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
                ChatApps
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              {renderIcon.map((item, index) => (
                <TouchableOpacity
                  style={{marginHorizontal: 12}}
                  onPress={() =>{
                   handleClick(item)
                   if(item.name=='camera'){
                    navigation.navigate('CameraScreenMade')
                   }
                  }}
                  key={index}>
                  <Feather name={item.name} color={item.color} size={24} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {RenderModal()}
        </LinearGradient>
      </View>
      <View
        style={{
          // backgroundColor: '#D6DBDF',
          height: height / 1.3,
          width: width / 1.1,
          elevation: 2,
          borderRadius: 20,
          margin: 15,
          bottom: 10,
          position: 'absolute',
        }}>
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {MessageData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('ChatScreen', {data: item});
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    margin: 10,
                  }}>
                  <Image
                    source={item.path}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: 'white',
                    }}
                    resizeMode="cover"
                  />
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        left: 12,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        left: 13,
                        color: '#566573',
                        top: 6,
                      }}>
                      {item.message}
                    </Text>
                  </View>
                  <Text
                    style={{
                      position: 'absolute',
                      flex: 1,
                      alignItems: 'flex-end',
                      right: width * 0.01,
                      bottom: 35,
                      color: 'grey',
                    }}>
                    {item.timeStamp}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Message;
