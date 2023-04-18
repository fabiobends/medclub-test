import {Appointment} from '../types/appointment';

export const specialtiesAndPhysicians = {
  gynecologist: ['Dr. Marcelo', 'Dr. André'],
  urologist: ['Dra. Paula', 'Dr. Maurício'],
  'general practitioner': ['Dr. Marcelo'],
  pediatrician: ['Dra. Maria', 'Dr. Bruno', 'Dr. Jackson'],
};

export const hospitals = [
  'Hospital Santa Marta',
  'Hospital Unimed',
  'Hospital São Marcos',
  'Hospital São José',
];

export const data: Array<Appointment> = [
  {
    id: '1681825914368',
    date: '12/04',
    hour: '09:00',
    physician: 'Dra. Paula',
    specialty: 'urologist',
    location: 'Hospital Santa Marta',
  },
  {
    id: '1681825926887',
    date: '13/04',
    hour: '10:30',
    physician: 'Dr. Marcelo',
    specialty: 'general practitioner',
    location: 'Hospital Unimed',
  },
];
