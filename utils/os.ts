import { Linking, Platform } from 'react-native';

export const IOS = 'iOS';
export const ANDROID = 'android';

export const osOpenSettings = () => {
  Linking.canOpenURL('app-settings:')
    .then(supported => {
      if (!supported) {
        console.log("Can't handle settings url");
      } else {
        return Linking.openURL('app-settings:');
      }
    })
    .catch(err => console.error('An error occurred', err));
};

export const getPlatform = () => Platform.OS.toLowerCase();

export const isPlatformAndroid = () => getPlatform() === ANDROID.toLowerCase();
export const isPlatformIOS = () => getPlatform() === IOS.toLowerCase();
