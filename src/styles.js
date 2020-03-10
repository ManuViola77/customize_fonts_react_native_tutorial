import {StyleSheet} from 'react-native';

const differentFont = "Dan'sDisneyUI";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
  },

  inputDifferentFont: {
    fontFamily: differentFont,
  },

  textDefaultFont: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },

  textDifferentFont: {
    fontFamily: differentFont,
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default styles;
