import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Height = props => {
  const height = hp(props);
  return height;
};

export const width = props => {
  const widths = wp(props);
  return widths;
};
