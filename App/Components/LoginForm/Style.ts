import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  separator: {
    marginBottom: 16,
  },
  loginButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  registerTextButton: {
    color: Colors.activeText,
    textDecorationLine: 'underline',
  },
});
