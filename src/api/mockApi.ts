import { Doctor } from '../types';

const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Aisha Khan',
    specialization: 'Cardiology',
    photo: 'https://picsum.photos/200',
    status: 'Online',
    yearsOfExperience: 12,
    bio: 'Cardiologist with expertise in heart failure and preventive cardiology. Graduated from ...',
    languages: ['English', 'Hindi', 'Urdu'],
  },
  {
    id: '2',
    name: 'Dr. Rohit Sharma',
    specialization: 'Dermatology',
    photo: 'https://picsum.photos/200',
    status: 'Offline',
    yearsOfExperience: 8,
    bio: 'Dermatologist focusing on acne, eczema and cosmetic dermatology.',
    languages: ['English', 'Hindi'],
  },
  {
    id: '3',
    name: 'Dr. Meera Patel',
    specialization: 'Pediatrics',
    photo: 'https://picsum.photos/200',
    status: 'Busy',
    yearsOfExperience: 15,
    bio: 'Pediatrician with emphasis on neonatal care and childhood immunizations.',
    languages: ['English', 'Gujarati'],
  },
];

export const fetchDoctors = (delay = 800): Promise<Doctor[]> =>
  new Promise((resolve) => setTimeout(() => resolve(mockDoctors), delay));

export const fetchDoctorById = (id: string, delay = 400): Promise<Doctor | null> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const doc = mockDoctors.find((d) => d.id === id) ?? null;
      resolve(doc);
    }, delay);
  });
