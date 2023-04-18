import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
  Platform,
  KeyboardAwareScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

import icon from '../../assets/images/user.png';
import {io} from 'socket.io-client';
import GeneralStatusBarColor from '../../utils/StatusBar';
const {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IconButton} from 'react-native-paper';
import back from '../../assets/images/w.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import DocumentPicker, {pickSingle} from 'react-native-document-picker';
import EmojiPicker from 'rn-emoji-keyboard';

let socket;
const CONNECTION_PORT = 'http://localhost:3000/';
const ChatScreen = ({navigation, route}) => {
  // const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [iconSet, setIconSet] = useState(false);
  const [secondRender, setSecondRender] = useState(false);
  const [storeText, setStoreText] = useState('');
  const [renderIcon, setRenderIcon] = useState(true);
  const [renderKeyboardIcon, setRenderKeyboardIcon] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const inputRef = useRef(null);
  const {data} = route.params;
  const [room, setRoom] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [userName, setUserName] = useState('');
  const [documentPicker, setDocumentPicker] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setUserName(data);
  }, []);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageList([...messageList, data]);
    });
  });

  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        message: message,
        author: userName.name,
        id: userName.id,
      },
    };

    await socket.emit('send_message', messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage('');
  };
  const connectToRoom = () => {
    // setLoggedIn(true);
    socket.emit('join_room', room);
  };
  useEffect(() => {
    connectToRoom();
  }, []);

  const handleClick = () => {
    setRenderIcon(!renderIcon);
    setRenderKeyboardIcon(true);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log('hello');
  };

  const maxWidthCalculator = item => {
    if (item.length >= 2 && item.length <= 5) {
      return 70;
    } else if (item.length >= 5 && item.length <= 10) {
      return 120;
    } else if (item.length >= 10 && item.length <= 30) {
      return 160;
    } else if (item.length >= 10 && item.length <= 20) {
      return 240;
    } else if (item.length >= 20 && item.length <= 100) {
      return 190;
    } else if (item.length >= 30 && item.length <= 100) {
      return 250;
    } else if (item.length >= 100 && item.length <= 250) {
      return 350;
    }
  };

  let modalData = [
    {
      id: 1,
      name: 'Document',
      icon: 'file',
      color: '#6495ED',
    },
    {
      id: 2,
      name: 'Camera',
      icon: 'camera',
      color: '#E74C3C',
    },
    {
      id: 3,
      name: 'Gallery',
      icon: 'image',
      color: '#9B59B6',
    },
    {
      id: 4,
      name: 'Audio',
      icon: 'headphones',
      color: '#D35400',
    },
    {
      id: 5,
      name: 'Location',
      icon: 'map-pin',
      color: '#27AE60',
    },
    {
      id: 6,
      name: 'Contact',
      icon: 'user',
      color: '#3498DB',
    },
  ];

  const chatData = [
    {
      id: '1',
      name: 'video',
      color: '#fff',
    },
    {
      id: 2,
      name: 'phone',
      color: '#fff',
    },
    {
      id: 3,
      name: 'more-vertical',
      color: '#fff',
    },
  ];
  const renderListData = [
    {
      id: 1,
      path: data.path,
      name: data.name,
      icon: 'arrow-left',
    },
  ];

  const selectDocumentFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('res : ' + JSON.stringify(res));
      setDocumentPicker(res);
    } catch (err) {
      setDocumentPicker(null);

      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const selectCameraFile = () => {
    console.log('hello camera');
  };

  const selectAudioFile = () => {
    console.log('hello audio');
  };

  const selectContactFile = () => {
    console.log('hello contact');
  };

  const handleDocumentPicker = item => {
    if (item.id == 1 || item.id == 3) {
      selectDocumentFile();
    } else if (item.id == 2) {
      selectCameraFile();
    } else if (item.id == 4) {
      selectAudioFile();
    } else if (item.id == 6) {
      selectContactFile();
    }
  };

  const modalTest = () => {
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          useNativeDriver={true}
          animationInTiming={300}
          backdropOpacity={0.1}
          animationIn="fadeInUp">
          <View
            style={{
              flex: 1,
              width: width / 1.1,
              maxHeight: height * 0.3,
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              top: height * 0.25,
              right: 4,
              justifyContent: 'center',
            }}>
            {modalData.map((item, index) => (
              <View style={{paddingTop: 14}} key={index}>
                <TouchableOpacity
                  style={{
                    backgroundColor: item.color,
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    margin: 20,
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    handleDocumentPicker(item);
                  }}>
                  <Feather
                    name={item.icon}
                    size={24}
                    color="white"
                    style={{padding: 12}}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: 'grey',
                      textAlign: 'center',
                      top: 10,
                      width: width * 0.2,
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

  const RenderMessageList = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          {messageList.map((item, index) => (
            <View style={{flex: 1}} key={index}>
              <View
                style={{
                  backgroundColor:
                    item.author == userName.name ? '#58D68D' : '#fff',
                  borderRadius: 15,
                  elevation: 4,
                  margin: 10,
                  display: 'flex',
                  alignSelf:
                    item.author == userName.name ? 'flex-end' : 'flex-start',
                  maxWidth: maxWidthCalculator(item.message),
                  position: 'relative',
                  marginRight: item.author == userName.name ? width * 0.1 : 0,
                  marginLeft: item.author == userName.name ? 0 : width * 0.1,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: item.author == userName.name ? 'white' : 'black',
                    padding: 10,
                    textAlign: 'center',
                  }}>
                  {item.message}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  };

  const handlePick = emojiObject => {
    console.log(emojiObject);
  };

  const RenderEmojiModal = () => {
    return (
      <View style={{bottom: 20}}>
        <EmojiPicker
          onEmojiSelected={handlePick}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          categoryPosition="top"
          expandable={false}
          enableRecentlyUsed
        />
      </View>
    );
  };

  return (
    <>
      <View style={{flex: 1}}>
        <ImageBackground source={back} style={{height: height, width: width}}>
          <View style={{flex: 1}}>
            <LinearGradient
              colors={['#486f62', '#264e54', '#324848', '#484c34']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={{
                height: height * 0.12,
              }}>
              <GeneralStatusBarColor />
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  flexDirection: 'row',
                  bottom: 10,
                }}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                  }}
                  onPress={() => navigation.goBack('')}>
                  <Icon
                    name="arrow-left"
                    size={20}
                    color="white"
                    style={{
                      left: 15,
                      bottom: Platform.OS == 'android' ? -11 : 20,
                      position: 'relative',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    left: 40,
                    position: 'absolute',
                    bottom: 2,
                  }}
                  onPress={() => navigation.navigate('EditProfile')}>
                  <Image
                    source={data.path}
                    style={{
                      height: height * 0.06,
                      width: width * 0.13,
                      borderRadius: 50,
                      borderWidth: 2,
                      left: width * 0.01,
                      borderColor: 'white',
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      left: 20,
                      color: 'white',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    {data.name}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    left: width * 0.6,
                    bottom:
                      Platform.OS == 'android'
                        ? height * -0.027
                        : height * 0.012,
                  }}>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                    }}>
                    <Feather name="video" size={22} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      left: width * 0.12,
                    }}>
                    <Feather name="phone" size={22} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
            <View style={{flex: 1}}>{RenderMessageList()}</View>
            <View style={{flex: 1}}>{modalTest()}</View>
          </View>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}>
            <View
              style={{
                flexDirection: 'row',
                height: 45,
                alignItems: 'center',
                marginHorizontal: 20,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                borderRadius: 50,
                marginTop: height * 0.42,
                width: '78%',
              }}>
              <TouchableOpacity
                activeOpacity={0.2}
                onPress={() => {
                  handleClick();
                  if (renderIcon != false) {
                    setIsOpen(true);
                  } else {
                    setIsOpen(false);
                  }
                }}>
                <Entypo
                  name={renderIcon == true ? 'emoji-happy' : 'keyboard'}
                  size={28}
                  color={renderIcon == true ? 'grey' : '#5D6D7E'}
                  style={{top: renderIcon == true ? 0 : 1}}
                />
              </TouchableOpacity>
              <TextInput
                style={{
                  padding: 10,
                  color: 'black',
                  fontSize: 17,
                }}
                ref={inputRef}
                placeholder="message"
                //dd  multiline={true}
                placeholderTextColor="grey"
                //autoFocus={true}
                onChangeText={text => {
                  setIconSet(true), setSecondRender(false), setStoreText(text);
                  setMessage(text);
                  console.log(text);
                }}
                onKeyPress={({nativeEvent}) => {
                  if (
                    nativeEvent.key === 'Backspace' &&
                    storeText.length <= 1
                  ) {
                    setIconSet(false), setSecondRender(true);
                  }
                }}
              />
              {iconSet == false && (
                <>
                  <TouchableOpacity
                    style={{
                      alignItems: 'flex-end',
                      flexDirection: 'row',
                      left: width / 1.8,
                      position: 'absolute',
                    }}
                    onPress={toggleModal}>
                    <Entypo name="attachment" size={24} color="grey" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignItems: 'flex-end',
                      flexDirection: 'row',
                      left: width / 1.5,
                      position: 'absolute',
                    }}>
                    <Entypo name="camera" size={24} color="grey" />
                  </TouchableOpacity>
                </>
              )}
              {secondRender == true && (
                <>
                  <TouchableOpacity
                    style={{
                      alignItems: 'flex-end',
                      flexDirection: 'row',
                      left: width / 1.8,
                      position: 'absolute',
                    }}
                    onPress={toggleModal}
                    activeOpacity={0.2}>
                    <Entypo name="attachment" size={24} color="grey" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignItems: 'flex-end',
                      flexDirection: 'row',
                      left: width / 1.5,
                      position: 'absolute',
                    }}>
                    <Entypo name="camera" size={24} color="grey" />
                  </TouchableOpacity>
                </>
              )}
            </View>
            <View
              style={{
                flex: 1,
                position: 'absolute',
                left: width * 0.84,
                top: height * 0.42,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  width: 45,
                  height: 45,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
                onPress={() => {
                  message !== '' ? sendMessage() : '';
                }}>
                <Ionicons
                  name={
                    iconSet != false
                      ? 'send-sharp'
                      : 'ios-mic' || secondRender == true
                      ? 'ios-mic'
                      : 'send-sharp'
                  }
                  size={25}
                  color="white"
                  style={{padding: 9, left: iconSet == true ? 4 : 1}}
                />
              </TouchableOpacity>
              {RenderEmojiModal()}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  systemMessageWrapper: {
    backgroundColor: '#6646ee',
    borderRadius: 4,
    padding: 5,
  },
  systemMessageText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
