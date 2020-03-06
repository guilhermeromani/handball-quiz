import React, { Component } from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import CheckboxList from '../components/CheckboxList';
import api from '../services/api';

export default class Main extends Component {
    componentDidMount() {
        this.loadCategories();
    }

    state = {
        docs: []
    };

    loadCategories = async () => {
        const response = await api.get('/categories');
        this.setState({ docs: response.data });
    }

    renderItem = ({ item }) => (
        <View>
            <Text>Categorias</Text>
            <Text>{item.number}</Text>
            <Text>{item.description}</Text>
        </View>
    )

    render() {
        return (
            <View>
                <CheckboxList
                    valueAttribute="_id"
                    labelAttribute="description"
                    list={this.state.docs}
                />
                {/* <FlatList
                    key={item => item._id}
                    data={this.state.docs}
                    renderItem={this.renderItem}
                /> */}
                <Button
                    title="Iniciar"
                    onPress={() => this.props.navigation.navigate('Question')}
                />
            </View>
        );
    }
}