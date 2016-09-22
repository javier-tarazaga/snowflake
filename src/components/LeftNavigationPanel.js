import React from 'react'

import { SwitchIOS, StyleSheet, View, Text } from 'react-native';

/**
 * The platform neutral button
 */
const Button = require('apsl-react-native-button')

var LeftNavigationPanel = React.createClass({
  render() {
    return (
      <View style={styles.controlPanel}>
        <Button
          onPress={this.props.closeDrawer}
          text="Close Drawer"
          />
      </View>
    )
  }
})

const styles = StyleSheet.create({
    controlPanel: {
      flex: 1,
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
