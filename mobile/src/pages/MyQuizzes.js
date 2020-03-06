import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class MyQuizzes extends Component {
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Menu</Text>
                <Button
                    title="Abra as categorias"
                    onPress={() => this.props.navigation.navigate('Categories')}
                />
            </View>
        );
    }
}

export default MyQuizzes;