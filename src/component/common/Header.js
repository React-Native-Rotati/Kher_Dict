import React, { Component } from 'react';
var SearchBar = require('react-native-search-bar');
import {View,Text, TextInput,StyleSheet } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
var data = require('../../../dictionary.json');

class Header extends Component {

  searchWord(text) {
    var filterData = _.filter(data, (item) => {
      if(item.word.indexOf(text) > -1) {
        return item;
      }
    });
    if(filterData.length>0) {
        this.props.onSearchComplete(filterData);
    } else {
      this.props.onSearchComplete([], true);
    }
  }
   render (){
       var rightButtonConfig = {
        title: 'Next',
        handler: function onNext() {
          alert('hello!');
        }
      };
       var titleConfig = {
          title: 'filterData.word',
        };

       return(
        <View style = {styles.header}>
        <SearchBar
            textFieldBackgroundColor='#fffffd'
            ref='searchBar'
            placeholder='Search'
            onChangeText={(text) => this.searchWord(text) }
            onSearchButtonPress={() => {} }
            onCancelButtonPress={(text) => this.searchWord(text)}
            searchBarStyle = 'minimal'
            />


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
    backgroundColor: '#c9c9ce',
    paddingTop: 15
  }

});
export default Header;
