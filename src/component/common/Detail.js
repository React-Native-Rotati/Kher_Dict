import React, { Component } from 'react';
var SearchBar = require('react-native-search-bar');
import {View,Text, TextInput,StyleSheet } from 'react-native';
import Header from './Header';
import _ from 'lodash';
var data = require('../../../dictionary.json');

class Detail extends Component {

   render (){
     const {text} = this.props;
     const { data } = this.props;
     return(
      <View style = {styles.header}>
        <Text>{ data.definition }</Text>
      </View>
     );
   }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    marginTop: 75,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15
  }

});
export default Detail;
