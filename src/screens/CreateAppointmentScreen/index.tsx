import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import useAppNavigation from '../../hooks/useAppNavigation';
import {Picker} from '@react-native-picker/picker';
import {
  dates,
  hospitals,
  hours,
  specialtyAndPhysicians,
  specialtyInPortuguese,
} from '../../mocks/data';
import themes from '../../styles/themes';
import useAppContext from '../../hooks/useAppContext';

const getPickerItems = (items: Array<string>) =>
  items.map(item => <Picker.Item key={item} label={item} value={item} />);

const specialties = Array.from(specialtyAndPhysicians.keys());
const specialtyItems = (() =>
  specialties.map(item => (
    <Picker.Item key={item} label={specialtyInPortuguese[item]} value={item} />
  )))();

const hourItems = getPickerItems(hours);
const dateItems = getPickerItems(dates);
const locationItems = getPickerItems(hospitals);

export default function CreateAppointmentScreen() {
  const {pop} = useAppNavigation();
  const {addAppointment} = useAppContext();
  const [currentHour, setCurrentHour] = useState(hours[0]);
  const [currentDate, setCurrentDate] = useState(dates[0]);
  const [currentSpecialty, setCurrentSpecialty] = useState(specialties[0]);
  const [currentLocation, setCurrentLocation] = useState(hospitals[0]);

  const availablePhysicians = useMemo(
    () => specialtyAndPhysicians.get(currentSpecialty) ?? [],
    [currentSpecialty],
  );
  const [currentPhysician, setCurrentPhysician] = useState(
    availablePhysicians[0],
  );
  const physicianItems = useMemo(
    () => getPickerItems(availablePhysicians),
    [availablePhysicians],
  );

  const createAppointment = useCallback(() => {
    addAppointment({
      id: Date.now(),
      date: currentDate,
      hour: currentHour,
      specialty: specialtyInPortuguese[currentSpecialty],
      location: currentLocation,
      physician: currentPhysician,
    });
    pop();
  }, [
    currentDate,
    currentHour,
    currentLocation,
    currentPhysician,
    currentSpecialty,
    pop,
    addAppointment,
  ]);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={currentHour}
        onValueChange={value => setCurrentHour(value)}>
        {hourItems}
      </Picker>
      <Picker
        selectedValue={currentDate}
        onValueChange={value => setCurrentDate(value)}>
        {dateItems}
      </Picker>
      <Picker
        selectedValue={currentSpecialty}
        onValueChange={value => setCurrentSpecialty(value)}>
        {specialtyItems}
      </Picker>
      <Picker
        selectedValue={currentPhysician}
        onValueChange={value => setCurrentPhysician(value)}>
        {physicianItems}
      </Picker>
      <Picker
        selectedValue={currentLocation}
        onValueChange={value => setCurrentLocation(value)}>
        {locationItems}
      </Picker>
      <TouchableOpacity onPress={createAppointment} style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: themes.light.secondary,
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: themes.light.primary,
    fontWeight: '500',
  },
});
