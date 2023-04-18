import React from 'react';
import {PropsWithChildren, createContext, useCallback, useState} from 'react';
import {data} from '../mocks/data';
import {Appointment} from '../types/appointment';

interface AppData {
  appointments: Array<Appointment>;
  addAppointment: (item: Appointment) => void;
  deleteAppointment: (id: number) => void;
}

export const AppContext = createContext({} as AppData);

const AppProvider = ({children}: PropsWithChildren) => {
  const [appointments, setAppointments] = useState(data);
  const addAppointment = useCallback((item: Appointment) => {
    setAppointments(prev => {
      prev.push(item);
      return prev.slice();
    });
  }, []);
  const deleteAppointment = useCallback((id: number) => {
    setAppointments(prev => {
      const remainingAppointments = prev.filter(
        appointment => appointment.id !== id,
      );
      return remainingAppointments;
    });
  }, []);
  return (
    <AppContext.Provider
      value={{appointments, addAppointment, deleteAppointment}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
