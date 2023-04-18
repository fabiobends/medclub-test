import {ColorValue, StatusBarStyle} from 'react-native/types';

interface Palette {
  background: ColorValue;
  onBackground: ColorValue;
  primary: ColorValue;
  onPrimary: ColorValue;
  secondary: ColorValue;
  onSecondary: ColorValue;
  barStyle: StatusBarStyle;
}

const themes: Record<'light' | 'dark', Palette> = {
  light: {
    background: '#dfdfdf',
    onBackground: '#222',
    primary: '#fff',
    onPrimary: '#222',
    secondary: '#0D5671',
    onSecondary: '#efefef',
    barStyle: 'dark-content',
  },
  dark: {
    background: '#efefef',
    onBackground: '#222',
    primary: '#efefef',
    onPrimary: '#222',
    secondary: '#0D5671',
    onSecondary: '#efefef',
    barStyle: 'light-content',
  },
};

export default themes;
