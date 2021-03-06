/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import Counter from './Counter';

const App = () => {
  const [totalPressed, setTotalPressed] = useState(0);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.label} testID="welcome">
            Welcome
          </Text>
          <Button
            title={totalPressed === 0 ? 'start' : 'clicked'}
            testID="startButton"
            onPress={() => {
              setTotalPressed(totalPressed + 1);
            }}
          />
          <View testID="containerCounter">
            <Counter
              testID="counter"
              style={styles.label}
              value={totalPressed}
            />
          </View>
          <Counter testID="counter" style={styles.label} value={totalPressed} />
          <TextInput testID="input" style={styles.input} />
          <View style={styles.listContainer}>
            <FlatList
              keyExtractor={(item) => item}
              testID="list"
              data={['Ana', 'Tom', 'Dan', 'Pedro']}
              renderItem={({item}) => (
                <Text style={styles.listItem}>{item}</Text>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  label: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
  },
  listContainer: {
    height: 100,
    width: '80%',
    backgroundColor: 'rgba(230,230, 230, 0.8)',
    alignSelf: 'center',
  },
  listItem: {
    height: 50,
  },
});

export default App;
