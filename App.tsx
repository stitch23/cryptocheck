import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './List'; 

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
