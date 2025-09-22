import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, RefreshControl, Text } from 'react-native';
import { fetchDoctors } from '../../api/mockApi';
import { Doctor } from '../../types';
import DoctorCard from '../../components/DoctorCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { useStyle } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'DoctorList'>;

export default function DoctorListScreen({ navigation }: Props) {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const {styles} = useStyle();
  
  const loadDoctors = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchDoctors();
      setDoctors(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDoctors();
  }, [loadDoctors]);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const data = await fetchDoctors(600);
      setDoctors(data);
    } finally {
      setRefreshing(false);
    }
  };

  const renderItem = ({ item }: { item: Doctor }) => (
    <DoctorCard
      doctor={item}
      onPress={(id) => navigation.navigate('DoctorProfile', { doctorId: id })}
    />
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!doctors.length) {
    return (
      <View style={styles.center}>
        <Text>No doctors available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        keyExtractor={(d) => d.id}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}