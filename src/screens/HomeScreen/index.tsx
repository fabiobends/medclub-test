import React, {useCallback, useMemo, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import routes from '../../routes';
import useAppNavigation from '../../hooks/useAppNavigation';
import themes from '../../styles/themes';
import {Appointment} from '../../types/appointment';
import PlusIcon from '../../assets/icons/plus.svg';

import {data} from '../../mocks/data';
import AppointmentItem from '../../components/AppointmentItem';

export default function HomeScreen(): JSX.Element {
  const {navigate} = useAppNavigation();
  const colorTheme = useColorScheme() ?? 'light';
  const [appointments, setAppointments] = useState<Array<Appointment>>(data);

  const backgroundStyle = useMemo(
    () => ({
      flex: 1,
      backgroundColor: themes[colorTheme].background,
    }),
    [colorTheme],
  );

  const renderAppointmentItem: ListRenderItem<Appointment> = ({item}) => (
    <AppointmentItem {...item} onDeleteItem={deleteAppointment} />
  );

  const deleteAppointment = useCallback(
    (id: string) => {
      const newAppointments = appointments.filter(item => item.id !== id);
      setAppointments(newAppointments);
    },
    [appointments],
  );

  const navigateToAppointmentScreen = useCallback(() => {
    navigate(routes.createAppointment);
  }, [navigate]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={themes[colorTheme].barStyle}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        data={appointments}
        contentContainerStyle={styles.flatListContent}
        style={styles.flatListMarginAside}
        renderItem={renderAppointmentItem}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyList}
      />
      <TouchableOpacity
        style={styles.plusButton}
        onPress={navigateToAppointmentScreen}>
        <PlusIcon
          fill="white"
          height={25}
          width={25}
          strokeWidth={1.5}
          stroke="white"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const ItemSeparator = () => <View style={styles.separator} />;

const EmptyList = () => <Text>Você não tem consultas no momento</Text>;

const styles = StyleSheet.create({
  flatListContent: {
    paddingVertical: 30,
    justifyContent: 'center',
  },
  flatListMarginAside: {marginHorizontal: 20},
  separator: {height: 20},
  plusButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.light.secondary,
  },
  text: {
    color: '#222',
  },
});
