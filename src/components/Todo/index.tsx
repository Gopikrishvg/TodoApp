import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import FaIcon5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('screen');

export interface TodoProps {
  title: string;
  todo: string;
  showTodo: boolean;
  todoChangeHandler: (todo: string) => void;
  todoUpdateHandler: (action: boolean) => void;
}

export default function Todo({
  title,
  showTodo,
  todo,
  todoChangeHandler,
  todoUpdateHandler,
}: TodoProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(showTodo);
  }, [showTodo]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <KeyboardAvoidingView enabled style={{flex: 1}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{title}</Text>
              <View style={styles.bottonContainer}>
                <TouchableOpacity
                  onPress={() => todoUpdateHandler(true)}
                  style={styles.button}>
                  <FaIcon5 name="check" size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => todoUpdateHandler(false)}
                  style={styles.button}>
                  <FaIcon5 name="times" size={24} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.todoConatiner}>
              <TextInput
                multiline={true}
                value={todo}
                placeholder="Enter a note"
                onChangeText={todoChangeHandler}
                style={[styles.inputContainer]}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000060',
  },
  modalView: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  todoConatiner: {
    width: '98%',
    height: '30%',
    paddingVertical: 6,
    paddingHorizontal: 4,
  },

  inputContainer: {
    minHeight: 146,
    width: '99%',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
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
  bottonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
