import React from 'react';
import {Text} from 'react-native';

export default function Counter({value, style, testID}) {
  return (
    <Text testID={testID} style={style}>
      {value.toString()}
    </Text>
  );
}
