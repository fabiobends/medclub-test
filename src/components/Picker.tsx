import {Picker as RNPicker} from '@react-native-picker/picker';
import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import themes from '../styles/themes';

export interface PickerValue {
  label: string;
  value: string;
}

interface PickerProps {
  title: string;
  items: Array<PickerValue>;
  currentValue: string;
  setCurrentValue: (value: string) => void;
}

const getPickerItems = (items: Array<PickerValue>) =>
  items.map(item => (
    <RNPicker.Item key={item.value} label={item.label} value={item.value} />
  ));

const Picker = ({title, items, currentValue, setCurrentValue}: PickerProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View style={styles[colorScheme].container}>
      <Text style={styles[colorScheme].pickerText}>{title}</Text>
      <RNPicker
        selectedValue={currentValue}
        onValueChange={setCurrentValue}
        dropdownIconColor={themes[colorScheme].secondary}
        dropdownIconRippleColor={themes[colorScheme].onBackground}>
        {getPickerItems(items)}
      </RNPicker>
      <View style={styles[colorScheme].divider} />
    </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 5,
    paddingTop: 5,
    borderRadius: 5,
    backgroundColor: themes.light.primary,
  },
  pickerText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    marginHorizontal: 15,
    marginBottom: 5,
    backgroundColor: themes.light.secondary,
  },
});

const styles = {
  light: lightStyles,
  dark: {
    ...lightStyles,
    container: {
      ...lightStyles.container,
      backgroundColor: themes.dark.primary,
    },
    divider: {
      ...lightStyles.divider,
      backgroundColor: themes.dark.secondary,
    },
  } as typeof lightStyles,
};

export default Picker;
