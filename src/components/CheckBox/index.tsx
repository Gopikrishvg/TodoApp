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

function CheckBox() {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.checkbox,
          {borderColor: 'green', backgroundColor: 'green'},
        ]}>
        <FaIcon5 name="check" size={14} color="white" />
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
