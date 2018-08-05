import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Link, Route } from 'react-router-native';
import SideMenu from 'react-native-side-menu';
import { ContentView } from './components/ContentView/content-view.component';
import { Menu } from './components/Menu/menu.component';

export default class App extends React.Component {
  render() {
    const menu = <Menu />;

    return (
      <NativeRouter>
        <View style={styles.container}>
          <SideMenu menu={menu}>
            <ContentView />
          </SideMenu>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
