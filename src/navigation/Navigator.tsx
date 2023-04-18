import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import CreateAppointmentScreen from '../screens/CreateAppointmentScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.home}
          component={HomeScreen}
          options={{title: 'Consultas'}}
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
