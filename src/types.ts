export type DoctorStatus = 'Online' | 'Offline' | 'Busy';

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  photo: string; // URL
  status: DoctorStatus;
  yearsOfExperience: number;
  bio: string;
  languages: string[];
}
