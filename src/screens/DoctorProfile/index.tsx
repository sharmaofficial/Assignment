import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, ActivityIndicator } from 'react-native';
import { fetchDoctorById } from '../../api/mockApi';
import { Doctor } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { useStyle } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'DoctorProfile'>;

export default function DoctorProfileScreen({ route, navigation }: Props) {
  const { doctorId } = route.params;
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);

  const {styles} = useStyle()
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      const d = await fetchDoctorById(doctorId);
      setDoctor(d);
      setLoading(false);
    })();
  }, [doctorId]);

  if (loading || !doctor) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
      <Image source={{ uri: doctor.photo }} style={styles.photo} />
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.spec}>{doctor.specialization} • {doctor.yearsOfExperience} yrs</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.sectionText}>{doctor.bio}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <Text style={styles.sectionText}>{doctor.languages.join(', ')}</Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Start Chat"
          onPress={() => navigation.navigate('Chat', { doctor })}
        />
      </View>
    </ScrollView>
  );
}