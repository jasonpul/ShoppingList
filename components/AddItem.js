import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('')

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={(textValue) => setText(textValue)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          Add Item
          <Icon name="plus" size={20} />{' '}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default AddItem
