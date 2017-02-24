import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableHighlight,ScrollView } from 'react-native';
import Header from './Header';
import { Actions } from 'react-native-router-flux';

const data = require('../../../dictionary.json');


class Listword extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      notFound: false
    }
  }

  handlePress(data){
    Actions.detail({ title: data.word, data: data });
  }
  onSearchComplete(data, notFound = false) {
    this.setState({ data: data, notFound: notFound })
  }

   render (){
     const { data, notFound } = this.state;
     let words = [];
     words = data.map((item, index) => {
       return <TouchableHighlight underlayColor= 'gray' onPress={() => this.handlePress(item) } style ={styles.row} key={index}>
                <Text>{item.word}</Text>
             </TouchableHighlight>
     })
       return(
          <View>
           <Header onSearchComplete={this.onSearchComplete.bind(this)} />
           <View style ={styles.contentContainerStyle}>
             <ScrollView
               automaticallyAdjustContentInsets={true}
               horizontal={false}
               style={[styles.scrollView, styles.horizontalScrollView]}>
                { words }
                {
                  notFound ?
                    <TouchableHighlight underlayColor= 'gray' style ={styles.row}>
                       <Text>Record Not found</Text>
                    </TouchableHighlight>
                    :
                    null
                }
             </ScrollView>
          </View>
         </View>
       );
   }
}
var styles = StyleSheet.create({
  contentContainerStyle: {
  alignItems:       'stretch',
  justifyContent:   'space-around',
},
listword: {
  justifyContent: 'space-around',
  flexDirection: 'row'
},

  navBar: {
    height: 64,
    backgroundColor: '#CCC',

  },
  row: {
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10,
    height: 44,
    flexDirection: 'row'
  }

});
export default Listword;
