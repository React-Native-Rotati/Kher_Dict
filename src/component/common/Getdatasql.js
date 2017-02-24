import React, { Component } from 'react';
import {View,Text} from 'react-native';

var data = require('./dictionary.json');

class GetJSON extends Component {
   render (){

       return(
           <View>
            console.log(data);
             <Text> {this.state.albums} </Text>
           </View>
       );
   }
}

export default GetJSON;
