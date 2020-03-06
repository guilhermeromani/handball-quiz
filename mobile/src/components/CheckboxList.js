import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem, CheckBox, Text, Body } from 'native-base';

export default class CheckboxList extends Component {
    state = {
        selectedList: []
        // :label="item[labelAttribute]"
        // :key="item[valueAttribute]"
        // :value="item[valueAttribute]"
    };

    renderItem = ({ item }) => (
        <ListItem>
            <CheckBox checked={true} />
            <Body>
                <Text>{item[this.props.labelAttribute]}</Text>
            </Body>
        </ListItem>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    key={item => item[this.props.valueAttribute]}
                    data={this.props.list}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa'
    }
});