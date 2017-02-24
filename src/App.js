import React, { Component } from 'react';
import {View,Text, TextInput } from 'react-native';
import Header from './component/common/Header';
import Listword from './component/common/Listword';
import {Scene, Router} from 'react-native-router-flux';
import Detail from './component/common/Detail';

class App extends Component {
  render (){
       return(
        <Router>
          <Scene key="root">
            <Scene key="lists" hideNavBar={true} component={Listword} />
            <Scene key="detail" hideNavBar={false} component={Detail} />
          </Scene>
        </Router>
       );
   }
}

export default App;
