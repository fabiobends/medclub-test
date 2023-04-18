import {Picker as RNPicker} from '@react-native-picker/picker';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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

const Picker = ({title, items, currentValue, setCurrentValue}: PickerProps) => (
  <View style={styles.container}>
    <Text style={styles.pickerText}>{title}</Text>
    <RNPicker
      selectedValue={currentValue}
      onValueChange={setCurrentValue}
      dropdownIconColor={themes.light.secondary}
      dropdownIconRippleColor={themes.light.background}>
      {getPickerItems(items)}
    </RNPicker>
    <View style={styles.divider} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 5,
    paddingTop: 5,
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

export default Picker;
