import { StyleSheet } from 'react-native';
import {
  moderateScale,
  scale,
  verticalScale
} from '../../utils/responsive';
export const useStyle = () => {
  const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    container: {
      padding: moderateScale(20),
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    photo: {
      width: verticalScale(120),
      height: verticalScale(120),
      borderRadius: 60,
      marginBottom: moderateScale(16),
    },
    name: { fontSize: scale(20), fontWeight: '700' },
    spec: {
      fontSize: scale(14),
      color: '#666',
      marginBottom: moderateScale(16),
    },
    section: { alignSelf: 'stretch', marginBottom: moderateScale(12) },
    sectionTitle: {
      fontSize: scale(16),
      fontWeight: '600',
      marginBottom: moderateScale(6),
    },
    sectionText: { fontSize: scale(14), color: '#333' },
    button: { marginTop: moderateScale(16), width: '100%' },
    center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  });
  return { styles };
};
