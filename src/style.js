import { StyleSheet, Platform, StatusBar } from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 90 : StatusBar.currentHeight;
export default StyleSheet.create({
statusBar: {
height: STATUSBAR_HEIGHT,
borderBottomEndRadius:30,
borderBottomLeftRadius:30
}
});