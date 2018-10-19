import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'



export default class Welcome extends Component {

  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <View style={ styles.container}>
        <View style={styles.logocontainer}>
        <Image source={{uri: 'https://res.cloudinary.com/aolfiligre/image/upload/v1539957082/Octocat.png'}}
       style={{width: 130, height: 130,}} />
        </View>
        <View style={styles.formcontainer}>
        <View style={ styles.containers}>
        <Text style={styles.welcome}>List Of Git-Users</Text>
        <TouchableOpacity title="Go to Home Screen"
        onPress={() =>this.props.navigation.navigate('Home')}
        style={ styles.button}>
         <Text style={ styles.buttontext}>
           VIEW
         </Text>
     </TouchableOpacity>
      </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:"#1abc9c",

},
logocontainer: {
    flex: 2,
    backgroundColor:"#dff9fb",
    justifyContent: "center",
    alignItems:"center",
},
formcontainer: {
    flex: 2,
    backgroundColor:"#dff9fb"
},
containers: {
  padding:20,
  justifyContent: "center",
  alignItems: "center",
  flex: 1
  
  },
  button: {
      paddingLeft:30,
      paddingRight:30,
      paddingTop:20,
      paddingBottom:20,
      backgroundColor:'#68a0cf',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      marginBottom:100
  
  },
  
  welcome: {
      flex: 1,
      fontSize: 20,
      color: '#000'
  
  },
  buttontext: {
  color: '#fff',
  fontSize:15,
  fontWeight:'600'
  }
  



})
