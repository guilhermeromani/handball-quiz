import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native';
import CheckBox from '../../components/Checkbox';

import styles from './styles';

export default function Answer() {
    const route = useRoute();
    const navigation = useNavigation();

    const { question, quiz, selectedAlternatives } = route.params;

    async function handleNext() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Question' }],
        });
        navigation.navigate('Question', { currentQuiz: quiz });
    }

    function checkCorrect(alternative) {
        var index = question.correct_answers.findIndex(item => item == alternative.letter);
        if (index != -1) return styles.correctCheckbox;
        else return styles.incorrectCheckbox;
    }

    function isSelected(alternative) {
        var index = selectedAlternatives.findIndex(item => item == alternative.letter);
        return index != -1;
    }

    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={styles.questionNumber}>{question.number}</Text>
                <Text style={styles.questionText}>{question.text}</Text>
            </View>
            <FlatList
                data={question.alternatives}
                style={styles.alternativeList}
                keyExtractor={alternative => String(alternative._id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: alternative }) => (
                    <View style={[styles.alternative]}>
                        <CheckBox
                            text={`${alternative.letter}. ${alternative.text}`}
                            selected={isSelected(alternative)}
                            textStyle={checkCorrect(alternative)}
                            onPress={() => { alert('Questão já respondida') }}
                        />
                    </View>
                )}
            />
            <View style={styles.answerBox}>
                <TouchableOpacity style={styles.answer} onPress={handleNext}>
                    <Text style={styles.answerText}>Próximo</Text>
                </TouchableOpacity>
                <Button
                    style={styles.answer}
                    onPress={() => navigation.navigate('Explanation', { texto: question.rules })}
                    title="Explicação"
                />
            </View>
        </View>
    );
}