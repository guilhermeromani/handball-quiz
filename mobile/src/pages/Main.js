import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = async () => {
        const response = await api.get('/categories');

        const { docs } = response.data;

        console.log(docs);
    }

    render() {
        return (
            <View>
                <Text>Olá mundo</Text>
            </View>
        );
    }
}