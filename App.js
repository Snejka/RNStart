import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput placeholder='Type a goal!' style={styles.textInput}/>
          <Button title='Add goal'/>
        </View>       
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'pink',
    justifyContent: 'center',
    // marginBottom: 24
  },
  inputWrapper: {
    //flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 3,
    padding: 3
  },
  textInput: {
    flex: 5,
    // borderColor: 'red',
    // borderWidth: 1,
    marginRight: 8,
    paddingLeft: 8
  },
  goalsContainer: {
    flex: 5,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingTop: 24
  }
});
