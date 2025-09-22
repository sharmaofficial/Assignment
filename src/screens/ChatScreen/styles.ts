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
    container: { flex: 1, backgroundColor: '#f6f7fb' },
    chatList: { padding: moderateScale(12), paddingBottom: moderateScale(20) },
    msgRow: { marginVertical: moderateScale(6), maxWidth: '80%' },
    msgRowUser: { marginLeft: '20%', alignSelf: 'flex-end' },
    msgRowDoctor: { alignSelf: 'flex-start' },
    msgBubble: { padding: moderateScale(10), borderRadius: 12 },
    bubbleUser: { backgroundColor: '#4f93ff', borderBottomRightRadius: 4 },
    bubbleDoctor: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#e6e6e6',
    },
    textUser: { color: '#fff' },
    textDoctor: { color: '#333' },
    inputRow: {
      flexDirection: 'row',
      padding: moderateScale(10),
      borderTopWidth: 1,
      borderColor: '#e8e8e8',
      backgroundColor: '#fff',
    },
    input: {
      flex: 1,
      padding: moderateScale(10),
      borderRadius: 8,
      backgroundColor: '#f1f3f6',
    },
    sendBtn: {
      marginLeft: moderateScale(8),
      paddingHorizontal: moderateScale(14),
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: '#4f93ff',
    },
    typingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: moderateScale(14),
      paddingVertical: moderateScale(6),
    },
    typingText: {
      marginLeft: moderateScale(8),
      fontSize: scale(12),
      color: '#555',
    },
  });
  return { styles };
};
