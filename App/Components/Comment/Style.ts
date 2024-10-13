import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.foreground,
  },
  containerHeader: {
    backgroundColor: Colors.foreground,
    padding: 8,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  containerAuthor: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  authorText: {
    marginRight: 12,
  },
  replyBtn: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: Colors.button,
  },
});
