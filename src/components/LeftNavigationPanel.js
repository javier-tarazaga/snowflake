import React from 'react'

import { SwitchIOS, StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * The platform neutral button
 */
const Button = require('apsl-react-native-button')

var LeftNavigationPanel = React.createClass({
  render() {
    return (
      <View style={styles.controlPanel}>
        <View style={{flex: 1}}/>
        <View style={{height: 100, backgroundColor: 'steelblue'}}>
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
    controlPanel: {
      flex: 2,
      backgroundColor:'#1E2326',
    },
    controlPanelText: {
      color:'white',
    },
    controlPanelWelcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 25,
      color:'white',
      fontWeight:'bold',
    },
});

module.exports = LeftNavigationPanel
