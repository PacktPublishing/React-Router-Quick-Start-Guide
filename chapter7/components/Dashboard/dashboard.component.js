import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Prompt } from 'react-router';

const style = StyleSheet.create({
    largeText: {
        fontSize: 30
    }
})
export class DashboardComponent extends Component {
    render() {
        return (
            <View>
                <Text style={style.largeText}> In DashboardComponent </Text>
                <Prompt message="Are you sure?" />
            </View>
        )
    }
}