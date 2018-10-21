import React, { Component} from 'react';
import { FlatList, Text, View  } from 'react-native';
import {List, ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import LinearGradient from 'react-native-linear-gradient'


export default class HomeScreen extends Component {

  static navigationOptions = {
    header:null
  }

  
   state = {
    data: []
  };

componentWillMount () {
  this.fetchData();
}

fetchData = async () => {
  const response = await fetch("https://api.myjson.com/bins/13nnpc.json");
  const json = await response.json();
  this.setState({data: json.repositories})
};






 render(){
     return (
        <View>
        <List>
       <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item})  =>
          <ListItem
          component={TouchableScale}

    friction={100} //
    tension={100} // These props are passed to the parent component (here TouchableScale)
    activeScale={0.95} //

    linearGradientProps={{
      colors: ['#b92b27', '#1565C0'],
      start: [1, 0],
      end: [0.2, 0],
    }}
    
    ViewComponent={LinearGradient} 
          roundAvatar
          avatar={{ uri: item.owner.avatarUrl } }
        title={`${item.name}`}
        titleStyle={{ color: '#a29bfe', fontWeight: 'bold' }}
        subtitle={item.description}
      />
         
            
     }         
       />
       </List>
       </View>
     );
 }
 }

