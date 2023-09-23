import {StyleSheet} from 'react-native';
import {Height, width} from '../../helpers/dimentions/dimentions';
import {COLORS} from '../../helpers/colors/colors';

const styles = StyleSheet.create({
  infoScreenView: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  infoView: {
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: Height(6),
  },
  imageStyle: {
    width: width('90%'),
    height: Height(25),
  },
  headerText: {
    color: COLORS.white,
    margin: 12,
    fontSize: Height(3),
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  containerStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',

    width: width('90%'),
  },
  headText: {
    color: COLORS.white,
    fontSize: Height(2),
    fontWeight: '600',
    margin: 3,
  },
  subText: {
    color: COLORS.secondary,
    fontSize: Height(2.3),
    fontWeight: '700',
  },
  flagInfoStyle: {
    marginTop: 12,
    width: width('90%'),
  },
});

export default styles;
