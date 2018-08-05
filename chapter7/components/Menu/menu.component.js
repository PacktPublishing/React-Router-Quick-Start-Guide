import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'lightblue',
        padding: 20,
        justifyContent: 'center',
    }
});


export class Menu extends Component {
    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View>
                    <Link to="/">
                        <Text>Home</Text>
                    </Link>
                    <Link to="/dashboard">
                        <Text>Dashboard</Text>
                    </Link>
                </View>
            </ScrollView>
        )
    }
}