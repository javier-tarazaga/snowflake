/**
 * # Main.js
 *  This is the main app screen
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * The actions we need
 */
import * as authActions from '../reducers/auth/authActions'
import * as globalActions from '../reducers/global/globalActions'

/**
 * Router
 */
import {Actions} from 'react-native-router-flux'

/**
 * Navigation Bar
 */
import NavigationBar from 'react-native-navbar'

/**
* Lef navigation drawer
**/
import Drawer from 'react-native-drawer'
import LefNavigationPanel from '../components/LeftNavigationPanel'

import DisplayLatLng from '../components/DisplayLatLng'

/**
 * The Header will display a Image and support Hot Loading
 */
import Header from '../components/Header'

/**
 * The components needed from React
 */
import React, {Component} from 'react'
import
{
  StyleSheet,
  View
}
from 'react-native'

/**
 * The platform neutral button
 */
const Button = require('apsl-react-native-button')

/**
 *  Instead of including all app states via ...state
 *  One could explicitly enumerate only those which Main.js will depend on.
 *
 */
function mapStateToProps (state) {
  return {
    auth: {
      form: {
        isFetching: state.auth.form.isFetching
      }
    },
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState
    }
  }
};

/*
 * Bind all the actions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...globalActions }, dispatch)
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#FF3366',
    borderColor: '#FF3366',
    marginLeft: 10,
    marginRight: 10
  }
})
/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

/**
 * ## App class
 */
class Home extends Component {
 closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  handlePress () {
    Actions.Subview({
      title: 'Subview'
      // you can add additional props to be passed to Subview here...
    })
  }

  render () {
    var titleConfig = {
      title: I18n.t('Subview.subview')
    }

    var leftButtonConfig = {
      title: I18n.t('Subview.back'),
      handler: Actions.pop
    }

    return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                // open={state.open}
                // onOpen={()=>Actions.refresh({key:state.key, open: true})}
                // onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="overlay"
                content={<LefNavigationPanel />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                styles={drawerStyles}>
                        <View style={{ flex: 1, }}>
                          <NavigationBar
                            title={titleConfig}/>
                          <DisplayLatLng />

                          <Button style={styles.button} onPress={this.openControlPanel.bind(this)}>
                           Toggle Side Menu
                          </Button>
                      </View>
            </Drawer>

    )

    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
      main: {paddingLeft: 3},
    }
  }
};

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home)
