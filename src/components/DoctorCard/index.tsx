import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Doctor } from '../types';

type Props = {
  doctor: Doctor;
  onPress: (id: string) => void;
};

export default function DoctorCard({ doctor, onPress }: Props) {
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  photo: { width: 64, height: 64, borderRadius: 32 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: '600' },
  spec: { fontSize: 13, color: '#444', marginTop: 2 },
  statusWrap: { alignItems: 'center', width: 80 },
  statusDot: { width: 12, height: 12, borderRadius: 6, marginBottom: 6 },
  statusText: { fontSize: 12, color: '#333' },
});
