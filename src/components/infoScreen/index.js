import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../helpers/header';

const InfoScreen = ({route, navigation}) => {
  const {Info, SelectedName} = route.params;

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderItem = item => {
    let Items = item.item;
    return (
      <View style={styles.infoView}>
        <View style={styles.imageContainer}>
          <Image source={{uri: Items.flags.png}} style={styles.imageStyle} />
        </View>
        <Text style={styles.headerText}>{Items.name.official}</Text>
        <View style={styles.containerStyle}>
          <Text style={styles.headText}>
            <Text style={styles.subText}>Capital : </Text>
            {Items.capital[0]}
          </Text>
          <Text style={styles.headText}>
            <Text style={styles.subText}>Total Area : </Text>
            {Items.area} km^2
          </Text>
          <Text style={styles.headText}>
            <Text style={styles.subText}>{'Latitude and Longitude : '}</Text>
            {'['} {Items.latlng[0]},{' '}
            <Text>
              {Items.latlng[1]}
              {' ]'}
            </Text>
          </Text>
          <Text style={styles.headText}>
            <Text style={styles.subText}>Total Population : </Text>
            {Items.population}
          </Text>
          <Text style={styles.headText}>
            <Text style={styles.subText}>Region : </Text>
            {Items.region}
          </Text>
          <Text style={styles.headText}>
            <Text style={styles.subText}>TimeZone : </Text>
            {Items.timezones}
          </Text>
        </View>
        <View style={styles.flagInfoStyle}>
          <Text style={styles.subText}>Flag Information</Text>
          <Text style={styles.headText}>{Items.flags.alt}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.infoScreenView}>
      <Header onPress={() => navigation.goBack()} headerName={SelectedName} />
      <View style={styles.container}>
        <FlatList
          data={Info}
          showsVerticalScrollIndicator={false}
          renderItem={RenderItem}
        />
      </View>
    </View>
  );
};

export default InfoScreen;
