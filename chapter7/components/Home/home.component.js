import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    largeText: {
        fontSize: 30
    }
})
export class HomeComponent extends Component {
    render() {
        return (
            <View>
                <Text style={style.largeText}> In HomeComponent </Text>
            </View>
        )
    }
}