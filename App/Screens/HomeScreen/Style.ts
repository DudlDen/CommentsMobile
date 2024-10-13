import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  areaContainer: {
    flex: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.foreground,
    borderRadius: 12,
    paddingRight: 4,
    marginVertical: 4,
  },
  input: {
    flex: 1,
  },
});
