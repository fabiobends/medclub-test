import React, {useCallback} from 'react';
import {
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

export default function HomeScreen(): JSX.Element {
  const {navigate} = useAppNavigation();

  const navigateToAppointmentScreen = useCallback(() => {
    navigate(routes.createAppointment);
  }, [navigate]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#333' : '#eee',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <TouchableOpacity onPress={navigateToAppointmentScreen}>
          <Text>Add appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#222',
  },
});
