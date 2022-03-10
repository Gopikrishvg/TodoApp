import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {}

export default function TodListScreen({}) {
  return (
    <View>
      <SafeAreaView>
        <Text>List</Text>
      </SafeAreaView>
    </View>
  );
}
