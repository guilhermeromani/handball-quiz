import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  categoryList: {
    marginTop: 15,
    paddingHorizontal: 24
  },

  category: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },

  startButton: {
    backgroundColor: '#E02041',
    height: 70,    
    justifyContent: 'center',
    alignItems: 'center'
  },

  startButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  }

});