import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = () => {
  const sampleTasks = [
    {
      id: 1,
      title: 'Schedule a meeting with Harshit Sir',
      time: '6:00 AM',
      tags: ['Habit', 'Must'],
      completed: true,
      icon: require('../assets/images/image1.png'),
      iconColor: '#2196F3',
      showArrow: false,
      showPhone: false,
    },
    {
      id: 2,
      title: '2.5 Hours Simran and Meditation',
      time: '10:00 AM',
      tags: ['Habit', 'Must'],
      completed: false,
      icon: require('../assets/images/image2.png'),
      iconColor: '#4CAF50',
      showArrow: false,
      showPhone: false,
    },
    {
      id: 3,
      title: 'Save 200 Rupees Daily',
      time: '11:00 AM',
      tags: ['Habit', 'Must'],
      completed: false,
      icon: require('../assets/images/image3.png'), 
      iconColor: '#FF9800',
      showArrow: false,
      showPhone: true,
    },
    {
      id: 4,
      title: 'Walk 10k Step Daily',
      time: '6:00 PM',
      tags: ['Habit', 'Important'],
      completed: false,
      icon: require('../assets/images/image4.png'),
      iconColor: '#9C27B0',
      showArrow: false,
      showPhone: false,
      counter: '12/31',
    },
    {
      id: 5,
      title: 'Buy Sunflower for Mumma',
      time: '11:00 AM',
      tags: ['Task', 'Important'],
      completed: false,
      icon: require('../assets/images/image5.png'), 
      iconColor: '#FF5722',
      showArrow: true,
      showPhone: false,
      counter: '0/1',
    },
    {
      id: 6,
      title: 'Make Mandala and Colour Daily',
      time: '6:00 PM',
      tags: ['Task', 'Important'],
      completed: false,
      icon: require('../assets/images/image6.png'), 
      iconColor: '#795548',
      showArrow: false,
      showPhone: false,
      counter: '12/30',
    },
  ];

  const handleToggle = (taskId) => {
    console.log('Toggle task:', taskId);
    // Handle task toggle logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.taskList}>
        {sampleTasks.map((task) => (
          <TaskItem 
            key={task.id}
            task={task}
            onToggle={handleToggle}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  taskList: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 100, // Space for floating button
  },
});

export default TaskList;