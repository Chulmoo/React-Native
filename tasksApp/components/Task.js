import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Task = ({taskName}) => {
  return (
    <View style={styles.taskContainer}>
    <Text style={{fontSize: 20}}>{taskName}</Text>
    <Ionicons name="md-checkmark-circle" size={40} color="green" />
  </View>
  )
}


export default Task

const styles = StyleSheet.create({
    taskContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
      },
})