import React from 'react';
import {
  Pressable,
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

function ToDoList({Tasks}) {
    return (
            <ScrollView>
                <Pressable>
                    <View style={[styles.task]}>
                        {Tasks.map((task, index) => (
                            <div key={index}>
                                <h3>{task}</h3>
                            </div>
                        ))}
                    </View>
                </Pressable>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
});

export default ToDoList;