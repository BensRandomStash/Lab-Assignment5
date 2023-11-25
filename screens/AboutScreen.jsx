import React from 'react';
import ToDoForm from '../components/ToDoForm';
import {
    SafeAreaView
} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const addTask = (taskText) => {
    const [tasks, setTasks] = React.useState('')
    setTasks([...tasks, taskText])
}

export default function AboutScreen({ navigation }) {
    return (
    <SafeAreaView>
        <MainLayout>
            <ToDoForm addTask = {addTask}/>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
    </SafeAreaView>
    )
}