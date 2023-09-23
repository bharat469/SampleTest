import {StyleSheet} from 'react-native';
import {width, Height} from '../../helpers/dimentions/dimentions';
import {COLORS} from '../../helpers/colors/colors';

const styles = StyleSheet.create({
  DataScreenView: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 20,
    width: width('90%'),
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  textInput: {
    color: COLORS.primary,
    fontSize: Height(2.2),
    width: width('69%'),
  },
  searchButton: {
    padding: 12,
    backgroundColor: COLORS.secondary,
    marginTop: Height('20%'),
    width: width('70%'),
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchText: {
    color: COLORS.primary,
    fontSize: Height(2.3),
    fontWeight: '800',
    margin: 12,
  },
});

export default styles;
