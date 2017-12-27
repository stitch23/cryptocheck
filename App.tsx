import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatListBasics from './List'; 

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <FlatListBasics />
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
