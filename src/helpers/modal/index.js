import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {COLORS} from '../colors/colors';
import {Height, width} from '../dimentions/dimentions';
import ErrorModal from '../../assets/error.svg';

const Modals = props => {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.modalStyle}>
        <ErrorModal width={'50%'} height={'40%'} top={10} />
        <Text style={styles.errorMsgStyle}>{props.errorMsg}</Text>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={props.modalButton}>
          <Text style={styles.modalText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Modals;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    height: Height('50%'),
    width: width('92%'),
    right: 1,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  errorMsgStyle: {
    marginTop: 12,
    fontSize: Height(2.4),
    textAlign: 'center',
    letterSpacing: 0.8,
    fontWeight: '700',
    color: COLORS.primary,
    padding: 12,
  },
  modalButton: {
    backgroundColor: COLORS.secondary,
    padding: 13,
    marginTop: 12,
    width: width('70%'),
    borderRadius: 12,
    alignItems: 'center',
  },
  modalText: {
    fontSize: Height(2.4),
    color: COLORS.primary,
    fontWeight: '700',
  },
});
