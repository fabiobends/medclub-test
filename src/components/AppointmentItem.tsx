import {View, useColorScheme, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Appointment} from '../types/appointment';
import themes from '../styles/themes';
import TrashIcon from '../assets/icons/trash.svg';
import Dialog from 'react-native-dialog';
import InfoLabel from './InfoLabel';

type AppointmentItemProps = Appointment & {
  onDeleteItem: (id: string) => void;
};

const AppointmentItem = ({
  id,
  date,
  hour,
  onDeleteItem,
  physician,
  location,
  specialty,
}: AppointmentItemProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  const [visible, setVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles[colorScheme].container}
        onPress={() => setVisible(true)}>
        <View style={styles[colorScheme].mainColumn}>
          <View style={styles[colorScheme].titleAndDescription}>
            <InfoLabel label="Médico(a):" value={physician} />
            <InfoLabel label="Hora:" value={hour} />
          </View>
          <InfoLabel label="Data:" value={date} />
        </View>
        <TrashIcon
          height={20}
          width={20}
          color={themes[colorScheme].secondary}
          fill={themes[colorScheme].secondary}
          style={styles[colorScheme].trashIcon}
          onPress={() => onDeleteItem(id)}
        />
      </TouchableOpacity>
      <Dialog.Container
        visible={visible}
        onBackdropPress={() => setVisible(false)}
        headerStyle={styles[colorScheme].dialogHeader}
        contentStyle={styles[colorScheme].dialogContainer}>
        <InfoLabel label="Médico(a):" value={physician} shouldExpand />
        <InfoLabel label="Especialidade:" value={specialty} shouldExpand />
        <InfoLabel label="Hora:" value={hour} shouldExpand />
        <InfoLabel label="Data:" value={date} shouldExpand />
        <InfoLabel label="Localização:" value={location} shouldExpand />
      </Dialog.Container>
    </>
  );
};

const lightStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: themes.light.primary,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {height: 10, width: 0},
    shadowOpacity: 0.1,
    elevation: 2,
  },
  mainColumn: {
    flex: 1,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  titleAndDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dialogContainer: {
    padding: 20,
    width: 300,
    borderRadius: 10,
  },
  dialogHeader: {
    marginVertical: 0,
  },
  trashIcon: {
    marginTop: 5,
  },
});

const styles = {
  light: lightStyle,
  dark: {
    ...lightStyle,
    container: {
      ...lightStyle.container,
      backgroundColor: themes.dark.primary,
    },
  } as typeof lightStyle,
};

export default AppointmentItem;
