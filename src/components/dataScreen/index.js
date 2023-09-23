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
  console.log('askjhdjka', isSuccess);
  console.log('askjhdjka', data);
  useEffect(() => {
    SendInformation();
  }, [isSuccess]);

  useEffect(() => {}, []);

  const SendInformation = async () => {
    if (data && isSuccess) {
      navigation.navigate('InfoScreen', {Info: data, SelectedName: country});
      await RestAction();
      setCountry('');
    } else {
      console.log('askjhdjka', isSuccess);
      console.log('askjhdjka', data);
    }
  };

  const handleInputChange = text => {
    setCountry(text);
  };

  const ButtonClicked = async details => {
    if (country) {
      await GetWorldInfo(details);
    } else {
      Alert.alert('Please Fill countryNameBefore');
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
