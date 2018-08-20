import React from 'react';
import { StyleSheet } from 'react-native';
import { BackButton, NativeRouter } from 'react-router-native';
import { RootComponent } from './components/root.component';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <BackButton>
          <RootComponent />
        </BackButton>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
