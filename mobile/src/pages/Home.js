import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class HomeScreen extends Component {
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

  export default HomeScreen;