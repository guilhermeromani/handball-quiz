import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20
  },

  newQuizButton: {
    backgroundColor: '#E02041',
    borderRadius: 20,
    marginHorizontal: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  newQuizButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5
  }
});