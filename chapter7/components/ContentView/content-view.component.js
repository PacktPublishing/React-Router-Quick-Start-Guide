import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Route } from 'react-router-native';
import { HomeComponent } from '../Home/home.component';
import { DashboardComponent } from '../Dashboard/dashboard.component';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
export class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Route
                    path="/"
                    exact
                    component={HomeComponent}
                />
                <Route
                    path="/dashboard"
                    exact
                    component={DashboardComponent}
                />
            </View>
        )
    }
}