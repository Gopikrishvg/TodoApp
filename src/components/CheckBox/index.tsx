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

interface CheckBoxProps {
  editable: boolean;
  changeCheckBoxHandler: (status: boolean) => void;
}

function CheckBox({editable, changeCheckBoxHandler}: CheckBoxProps) {
  const [checked, setChecked] = useState(false);

  function statusChangeHandler(status: boolean) {
    console.log(editable);

    if (editable) {
      setChecked(status);
      changeCheckBoxHandler(status);
    }
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => statusChangeHandler(!checked)}
        style={[
          styles.checkbox,
          {
            borderColor: checked == true ? 'green' : 'black',
            backgroundColor: checked == true ? 'green' : 'white',
          },
        ]}>
        {checked == true && <FaIcon5 name="check" size={14} color="white" />}
      </TouchableOpacity>
    </View>
  );
}

export default CheckBox;

const styles = StyleSheet.create({
  checkbox: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});
