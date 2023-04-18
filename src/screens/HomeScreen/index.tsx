import React, {useCallback} from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
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

import AppointmentItem from '../../components/AppointmentItem';
import useAppContext from '../../hooks/useAppContext';

export default function HomeScreen(): JSX.Element {
  const {navigate} = useAppNavigation();
  const {appointments, deleteAppointment} = useAppContext();
  const colorTheme = useColorScheme() ?? 'light';

  const renderAppointmentItem: ListRenderItem<Appointment> = ({item}) => (
    <AppointmentItem {...item} onDeleteItem={deleteAppointment} />
  );

  const navigateToAppointmentScreen = useCallback(() => {
    navigate(routes.createAppointment);
  }, [navigate]);

  return (
    <SafeAreaView style={styles[colorTheme].container}>
      <FlatList
        data={appointments}
        contentContainerStyle={styles[colorTheme].flatListContent}
        style={styles[colorTheme].flatListMarginAside}
        renderItem={renderAppointmentItem}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyList}
      />
      <TouchableOpacity
        style={styles[colorTheme].plusButton}
        onPress={navigateToAppointmentScreen}>
        <PlusIcon
          fill={themes[colorTheme].background}
          height={25}
          width={25}
          strokeWidth={1.5}
          stroke={themes[colorTheme].background}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const ItemSeparator = () => <View style={styles.light.separator} />;

const EmptyList = () => {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <Text style={styles[colorScheme].emptyText}>
      Você não tem consultas no momento.
    </Text>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.light.background,
  },
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
    color: themes.light.primary,
  },
  emptyText: {
    color: themes.light.onBackground,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const styles = {
  light: lightStyles,
  dark: {
    ...lightStyles,
    container: {
      ...lightStyles.container,
      backgroundColor: themes.dark.background,
    },
    plusButton: {
      ...lightStyles.plusButton,
      backgroundColor: themes.dark.secondary,
    },
    text: {
      color: themes.dark.primary,
    },
    emptyText: {
      ...lightStyles.emptyText,
      color: themes.dark.onBackground,
    },
  } as typeof lightStyles,
};
