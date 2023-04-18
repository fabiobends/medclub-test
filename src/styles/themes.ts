import {ColorValue} from 'react-native/types';

interface Palette {
  background: ColorValue;
  onBackground: ColorValue;
  primary: string;
  onPrimary: string;
  secondary: ColorValue;
  onSecondary: ColorValue;
}

const themes: Record<'light' | 'dark', Palette> = {
  light: {
    background: '#D0DBDF',
    onBackground: '#222',
    primary: '#fff',
    onPrimary: '#222',
    secondary: '#094A62',
    onSecondary: '#efefef',
  },
  dark: {
    background: '#222',
    onBackground: '#fff',
    primary: '#333',
    onPrimary: '#fff',
    secondary: '#47BAE4',
    onSecondary: '#111',
  },
};

export default themes;
