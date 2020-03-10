import React from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import styles from './styles';

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'GoodFeelingSans',
    },
  };

  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>How to Customize Fonts in React Native</Text>
      <Text style={styles.textDefaultFont}>
        This is the default font (GoodFeelingSans)
      </Text>
      <Text style={styles.textDifferentFont}>
        This is a different font (Dan'sDisneyUI)
      </Text>
      <TextInput value="This input has default font" />
      <TextInput
        value="This input has a different font"
        style={styles.inputDifferentFont}
      />
    </SafeAreaView>
  );
};

export default App;
