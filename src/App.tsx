import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAppointmentScreen from './screens/CreateAppointmentScreen';
import HomeScreen from './screens/HomeScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.home}
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name={routes.createAppointment}
          component={CreateAppointmentScreen}
          options={{title: 'Create Appointment'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
