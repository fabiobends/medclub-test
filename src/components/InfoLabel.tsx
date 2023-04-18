import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface InfoLabelProps {
  label: string;
  value: string;
  shouldExpand?: boolean;
}

const InfoLabel = ({label, value, shouldExpand = false}: InfoLabelProps) => (
  <View style={[infoStyles.container, shouldExpand && infoStyles.expand]}>
    <Text style={infoStyles.label}>{label} </Text>
    <Text>{value}</Text>
  </View>
);

const infoStyles = StyleSheet.create({
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
});

export default InfoLabel;
