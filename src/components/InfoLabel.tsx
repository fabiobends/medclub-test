import React from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';
import themes from '../styles/themes';

interface InfoLabelProps {
  label: string;
  value: string;
  shouldExpand?: boolean;
}

const InfoLabel = ({label, value, shouldExpand = false}: InfoLabelProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View
      style={[
        styles[colorScheme].container,
        shouldExpand && styles[colorScheme].expand,
      ]}>
      <Text style={[styles[colorScheme].text, styles[colorScheme].label]}>
        {label}{' '}
      </Text>
      <Text style={styles[colorScheme].text}>{value}</Text>
    </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  expand: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: themes.light.onPrimary,
  },
});

const styles = {
  light: lightStyles,
  dark: {
    ...lightStyles,
    text: {
      ...lightStyles.text,
      color: themes.dark.onPrimary,
    },
  } as typeof lightStyles,
};

export default InfoLabel;
