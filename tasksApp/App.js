import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Luft hunden',
    },
    {
    id: 2,
    name: 'lukas er lort',
    },
    {
      id: 3,
      name: 'Lukas eller bot',
    }
])

const completeTask = (id) => {
  const updatedTaskList = tasks.filter(task => task.id !== id)

  setTasks(updatedTaskList)
}
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Min Task App</Text>
      <FlatList 
        data={tasks}
        renderItem={({item}) => {
          return(
            <TouchableOpacity onPress={() => completeTask(item.id)}>
              <Task taskName={item.name} />
            </TouchableOpacity>
          ) 
        }}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.createButton}>
        <Text>Opret ny task</Text>
      </TouchableOpacity>
      </View>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  headerText: {
    fontSize: 32,
  },
  createButton: {
    backgroundColor: "#53B3CB",
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,

  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
  }
});
