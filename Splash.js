import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';



export default class Splash extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
        <View style={styles.titlewrapper}>
            <Text style={styles.title}>Git-Prof </Text>
            </View>
            <View>
           <Text style={styles.subtitle}>Its all React-Native</Text>
           </View>
       </View>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, 
        justifyContent:"center", 
        alignItems:"center",
        backgroundColor:"#2c3e50",
        
    },
    
    title: {
        color: "#ecf0f1",
        fontSize: 35,
        fontWeight: '400'
    },
    subtitle:{
        color:"#ecf0f1",
        fontWeight:'200',
        paddingBottom: 20,
        
    },
    titlewrapper:{
        flex: 1,
        justifyContent: "center",
        
    }
    
});

