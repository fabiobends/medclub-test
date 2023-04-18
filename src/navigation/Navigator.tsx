import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import CreateAppointmentScreen from '../screens/CreateAppointmentScreen';
import HomeScreen from '../screens/HomeScreen';
import {useColorScheme} from 'react-native';
import themes from '../styles/themes';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          orientation: 'portrait',
          headerStyle: {
            backgroundColor: themes[colorScheme].primary,
          },
          headerTintColor: themes[colorScheme].onPrimary,
          statusBarStyle: colorScheme ? 'light' : 'dark',
        }}>
        <Stack.Screen
          name={routes.home}
          component={HomeScreen}
          options={{
            title: 'Consultas',
          }}
        />
        <Stack.Screen
          name={routes.createAppointment}
          component={CreateAppointmentScreen}
          options={{title: 'Criar consulta'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
