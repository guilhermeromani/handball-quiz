import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class HomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Menu</Text>
          <Button
            title="Novo"
            onPress={() => this.props.navigation.navigate('NewQuiz')}
          />
          <Button
            title="Meus Testes"
            onPress={() => this.props.navigation.navigate('MyQuizzes')}
          />
        </View>
      );
    }
  }

  export default HomeScreen;