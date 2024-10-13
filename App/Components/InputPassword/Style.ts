import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.foreground,
    borderRadius: 12,
    paddingRight: 12,
  },
  input: {
    flex: 1,
  },
});
