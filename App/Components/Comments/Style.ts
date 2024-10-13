import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  commentContainer: {
    marginLeft: 6,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pageTextActive: {
    color: Colors.activeText,
    textDecorationLine: 'underline',
  },
  pageText: {
    marginRight: 8,
  },
});
