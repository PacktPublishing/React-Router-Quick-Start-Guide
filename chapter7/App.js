import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { BackButton, NativeRouter } from 'react-router-native';
import { ContentView } from './components/ContentView/content-view.component';
import { Menu } from './components/Menu/menu.component';

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

export default class App extends Component {
  render() {
    const menu = <Menu />;
    const initialEntries = ['/', '/dashboard'];
    const initialIndex = 1;
    return (
      <NativeRouter initialEntries={initialEntries} initialIndex={initialIndex}>
        <View style={styles.container}>
          <BackButton />
          <SideMenu menu={menu}>
            <ContentView />
          </SideMenu>
        </View>
      </NativeRouter>
    );
  }
}


