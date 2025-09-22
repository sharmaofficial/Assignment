import { StyleSheet } from 'react-native';
export const useStyle = () => {
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f6f7fb' },
    center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  });
  return { styles };
};
