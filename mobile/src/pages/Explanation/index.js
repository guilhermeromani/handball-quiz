import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Explanation({ route, navigation }) {
    const { rules } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>{rules.text}</Text>
        </View>
    );
}