import React from 'react';
import {
  View,
  Button,
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

interface Props {
  createClickHandler: () => void;
}

function TodoListScreen({createClickHandler}: Props) {
  return (
    <View>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Note List</Text>
              <View style={styles.bottonContainer}>
                <Button title="Create" onPress={() => createClickHandler()} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  mainContainer: {
    flex: 1,
    // paddingVertical: 6,
  },
  headerContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 2,
    backgroundColor: '#e5e5e5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  todoContentContainer: {
    alignItems: 'center',
  },
  bottonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
