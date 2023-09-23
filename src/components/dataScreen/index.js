import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Travel from '../../assets/travel.svg';
import {Height, width} from '../../helpers/dimentions/dimentions';
import {COLORS} from '../../helpers/colors/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {GetWorldInfo, RestAction} from './actions';
import {connect} from 'react-redux';
import Modals from '../../helpers/modal';
import {GENRIC_ERROR} from '../../helpers/constantText';

const DataScreen = ({
  GetWorldInfo,
  data,
  isSuccess,
  isLoading,
  errorMsg,
  navigation,
  RestAction,
}) => {
  const [country, setCountry] = useState('');
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMsg] = useState('');
  useEffect(() => {
    SendInformation();
  }, [isSuccess, errorMsg]);

  useEffect(() => {}, []);

  const SendInformation = async () => {
    if (data && isSuccess) {
      navigation.navigate('InfoScreen', {Info: data, SelectedName: country});
      await RestAction();
      setCountry('');
    } else if (errorMsg) {
      setModal(true);
      if (errorMsg === GENRIC_ERROR) {
        setErrorMsg(GENRIC_ERROR);
      } else {
        setErrorMsg(
          'Oops! It looks like the country name you entered is incorrect. ',
        );
      }
    }
  };

  const handleInputChange = text => {
    setCountry(text);
  };

  const ButtonClicked = async details => {
    if (country) {
      await GetWorldInfo(details);
    } else {
      setModal(true);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.DataScreenView}>
      <Travel width={width('90%')} height={Height(50)} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter the Country you want to search"
          style={styles.textInput}
          placeholderTextColor={COLORS.black}
          value={country}
          onChangeText={handleInputChange}
        />
        <FontAwesome name="search" size={24} color={COLORS.primary} />
      </View>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => ButtonClicked(country)}>
        <Text style={styles.searchText}>Fly with us</Text>
        <Ionicons name="airplane" size={24} color={COLORS.primary} />
      </TouchableOpacity>
      <Modals
        isVisible={modal}
        errorMsg={errorMessage}
        modalButton={() => setModal(false)}
      />
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({
  isSuccess: state.DataReducer.dataSucess,
  data: state.DataReducer.data,
  errorMsg: state.DataReducer.errorCode,
  isLoading: state.DataReducer.dataLoading,
});

const mapDispatchToProps = {
  GetWorldInfo,
  RestAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataScreen);
