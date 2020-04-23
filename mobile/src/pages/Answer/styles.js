import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },

    question: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 24
    },

    questionNumber: {
        fontSize: 18
    },

    questionText: {
        fontSize: 15
    },

    alternativeList: {
        marginTop: 32
    },

    alternative: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    answerBox: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    answer: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    answerText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

    correctCheckbox: {
        color: '#31E508',
    },

    incorrectCheckbox: {
        color: '#E71313',
    }

});