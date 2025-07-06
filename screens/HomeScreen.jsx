import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../components/DatePicker';
import QuoteCard from '../components/QuoteCard';
import TaskList from '../components/TaskList';
import FloatingButton from '../components/FloatingButton';
import BottomDrawer from '../components/BottomDrawer';

const HomeScreen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(18);

  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const tasks = [
    {
      id: 1,
      title: 'Schedule a meeting with Harshit Sir',
      time: '6:00 AM',
      tags: ['Work'],
      completed: true,
      icon: 'people',
      iconColor: '#4A90E2',
    },
    {
      id: 2,
      title: '2.5 Hours Simran and Meditation',
      time: '7:00 AM',
      tags: ['Habit'],
      completed: false,
      icon: 'self-improvement',
      iconColor: '#5CB3F7',
    },
    {
      id: 3,
      title: 'Save 200 Rupees Daily',
      time: '',
      tags: ['Habit'],
      completed: false,
      icon: 'savings',
      iconColor: '#FFA726',
    },
    {
      id: 4,
      title: 'Walk 10k Step Daily',
      time: '09:00 AM',
      tags: ['Important'],
      completed: false,
      icon: 'directions-walk',
      iconColor: '#66BB6A',
    },
    {
      id: 5,
      title: 'Buy Sunflower for Mumma',
      time: '12:00 PM',
      tags: ['Important'],
      completed: false,
      icon: 'shopping-cart',
      iconColor: '#FFA726',
    },
    {
      id: 6,
      title: 'Make Mandala and Colour Daily',
      time: '12:00 PM',
      tags: ['Important'],
      completed: false,
      icon: 'palette',
      iconColor: '#AB47BC',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logo}>
            <Icon name="flight" size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.headerTitle}>WingsFly</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={24} color="#4F4F4F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="calendar-month" size={24} color="#4F4F4F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="help-outline" size={24} color="#4F4F4F" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Date Picker */}
        <DatePicker
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />

        {/* Quote Card */}
        <QuoteCard />

        {/* Task List */}
        <TaskList tasks={tasks} />
      </ScrollView>

      {/* Floating Button */}
      <FloatingButton onPress={handleOpenDrawer} />

      {/* Bottom Drawer */}
      <BottomDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#4A47A3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#363636',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 4,
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;