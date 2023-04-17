import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import useAppNavigation from '../../hooks/useAppNavigation';
import routes from '../../routes';

export default function CreateAppointmentScreen() {
  const {navigate} = useAppNavigation();

  const navigateToHomeScreen = useCallback(() => {
    navigate(routes.home);
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Text>Consulta</Text>
      <TouchableOpacity onPress={navigateToHomeScreen}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
