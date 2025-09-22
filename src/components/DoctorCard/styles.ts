import { StyleSheet } from 'react-native';
import {
  heightPercentage,
  moderateScale,
  scale,
  verticalScale,
  widthPercentage,
} from '../../utils/responsive';
export const useStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: moderateScale(12),
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: 8,
      marginVertical: moderateScale(6),
      marginHorizontal: moderateScale(12),
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 1,
    },
    photo: { 
        width: verticalScale(64), 
        height: verticalScale(64), 
        borderRadius: verticalScale(32) 
    },
    info: { flex: 1, marginLeft: moderateScale(12) },
    name: { fontSize: scale(16), fontWeight: '600' },
    spec: { fontSize: scale(13), color: '#444', marginTop: 2 },
    statusWrap: { alignItems: 'center', width: verticalScale(80) },
    statusDot: { width: verticalScale(12), height: verticalScale(12), borderRadius: 6, marginBottom: moderateScale(6) },
    statusText: { fontSize: scale(12), color: '#333' },
  });

  return { styles };
};
