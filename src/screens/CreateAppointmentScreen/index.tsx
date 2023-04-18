import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import useAppNavigation from '../../hooks/useAppNavigation';
import {
  dates,
  hospitals,
  hours,
  specialtyAndPhysicians,
  specialtyInPortuguese,
} from '../../mocks/data';
import themes from '../../styles/themes';
import useAppContext from '../../hooks/useAppContext';
import Picker, {PickerValue} from '../../components/Picker';

const specialties = Array.from(specialtyAndPhysicians.keys());

const getPickerValues = (
  items: Array<string>,
  obj?: Record<string, string>,
): Array<PickerValue> =>
  items.map(item => ({label: obj ? obj[item] : item, value: item}));

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
        currentValue={currentHour}
        setCurrentValue={setCurrentHour}
        items={getPickerValues(hours)}
        title="Hora"
      />
      <Picker
        currentValue={currentDate}
        setCurrentValue={setCurrentDate}
        items={getPickerValues(dates)}
        title="Data"
      />
      <Picker
        currentValue={currentSpecialty}
        setCurrentValue={setCurrentSpecialty}
        items={getPickerValues(specialties, specialtyInPortuguese)}
        title="Especialidade"
      />
      <Picker
        currentValue={currentPhysician}
        setCurrentValue={setCurrentPhysician}
        items={getPickerValues(availablePhysicians)}
        title="Médico"
      />
      <Picker
        currentValue={currentLocation}
        setCurrentValue={setCurrentLocation}
        items={getPickerValues(hospitals)}
        title="Localização"
      />
      <TouchableOpacity onPress={createAppointment} style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
