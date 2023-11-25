import React from 'react';
import ToDoList from '../components/ToDoList';
import {
    SafeAreaView
} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const Tasks = ({}) => {
    const tasks = React.useState(['Do laundry', 'Go to gym', 'Walk dog'])}

export default function HomeScreen({ navigation }) {
    return (
    <SafeAreaView>
      <MainLayout>
            <ToDoList Tasks = {Tasks}/>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
      </MainLayout>
    </SafeAreaView>
    )
}