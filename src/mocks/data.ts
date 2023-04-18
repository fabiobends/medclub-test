import {Appointment} from '../types/appointment';

export const specialtyAndPhysicians: Map<string, Array<string>> = new Map([
  ['gynecologist', ['Dr. Marcelo', 'Dr. André']],
  ['urologist', ['Dra. Paula', 'Dr. Maurício']],
  ['general practitioner', ['Dr. Marcelo']],
  ['pediatrician', ['Dra. Maria', 'Dr. Bruno', 'Dr. Jackson']],
]);

export const specialtyInPortuguese: Record<string, string> = {
  gynecologist: 'Ginecologista',
  urologist: 'Urologista',
  'general practitioner': 'Clínico Geral',
  pediatrician: 'Pediatra',
};

export const hours = [
  '07:30',
  '09:00',
  '10:30',
  '12:00',
  '13:30',
  '15:00',
  '16:30',
];

export const dates = [
  '25/04',
  '26/04',
  '30/04',
  '01/05',
  '03/05',
  '04/05',
  '05/05',
];

export const hospitals = [
  'Hospital Santa Marta',
  'Hospital Unimed',
  'Hospital São Marcos',
  'Hospital São José',
];

export const data: Array<Appointment> = [
  {
    id: 1681825914368,
    date: '12/04',
    hour: '09:00',
    physician: 'Dra. Paula',
    specialty: specialtyInPortuguese.urologist,
    location: 'Hospital Santa Marta',
  },
  {
    id: 1681825926887,
    date: '13/04',
    hour: '10:30',
    physician: 'Dr. Bruno',
    specialty: specialtyInPortuguese.pediatrician,
    location: 'Hospital Unimed',
  },
];
