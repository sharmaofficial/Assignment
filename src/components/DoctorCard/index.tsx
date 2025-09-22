import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Doctor } from '../types';
import { useStyle } from './styles';

type Props = {
  doctor: Doctor;
  onPress: (id: string) => void;
};

export default function DoctorCard({ doctor, onPress }: Props) {
  const {styles} = useStyle()
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(doctor.id)}>
      <Image source={{ uri: doctor.photo }} style={styles.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.spec}>{doctor.specialization}</Text>
      </View>
      <View style={styles.statusWrap}>
        <View style={[styles.statusDot, dotColor(doctor.status)]} />
        <Text style={styles.statusText}>{doctor.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const dotColor = (status: string) => {
  switch (status) {
    case 'Online': return { backgroundColor: '#2ecc71' };
    case 'Busy': return { backgroundColor: '#f1c40f' };
    default: return { backgroundColor: '#95a5a6' };
  }
};

