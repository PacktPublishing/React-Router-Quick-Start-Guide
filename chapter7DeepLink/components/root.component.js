import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, Route, DeepLinking } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    routeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export class HomeComponent extends Component {
    render() {
        return (
            <View>
                <Text> In HomeComponent </Text>
            </View>
        );
    }
}

export class DashboardComponent extends Component {
    render() {
        return (
            <Text> In DashboardComponent </Text>
        );
    }
}

// const DashboardComponent = () => <Text> In DashboardComponent </Text>;

export class RootComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DeepLinking />
                <View style={styles.nav}>
                    <Link to="/"><Text>Home</Text></Link>
                    <Link to="/dashboard"><Text>Dashboard</Text></Link>
                </View>
                <View style={styles.routeContainer}>
                    <Route path="/app.chapter7.com" exact component={HomeComponent} />
                    <Route path="/app.chapter7.com/dashboard" component={DashboardComponent} />
                </View>
            </View>
        )
    }
}