import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../colors/colors';
import {Height} from '../dimentions/dimentions';

const Header = props => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={props.onPress}>
        <Ionicons name="arrow-back-sharp" size={24} color={COLORS.primary} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.headerName}</Text>
      <Text></Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.secondary,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.primary,
    fontSize: Height(3),
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: 0.8,
  },
});
