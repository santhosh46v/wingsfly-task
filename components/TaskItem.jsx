import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onToggle }) => {
  const getTagStyle = (tag) => {
    const tagStyles = {
      'Habit': { backgroundColor: '#E8E8E8', color: '#666666', hasIcon: true },
      'Must': { backgroundColor: '#E8E8E8', color: '#666666', hasIcon: true },
      'Important': { backgroundColor: '#E8E8E8', color: '#666666', hasIcon: true },
      'Work': { backgroundColor: '#E8E8E8', color: '#666666', hasIcon: true },
      'Task': { backgroundColor: '#E8E8E8', color: '#666666', hasIcon: true },
    };
    return tagStyles[tag] || { backgroundColor: '#E8E8E8', color: '#666666', hasIcon: true };
  };

  const getTimeStyle = (time) => {
    if (time === '6:00 AM') return { backgroundColor: '#E8F4FD', color: '#2196F3' };
    if (time === '10:00 AM') return { backgroundColor: '#E8F5E8', color: '#4CAF50' };
    if (time === '11:00 AM') return { backgroundColor: '#FFF3E0', color: '#FF9800' };
    if (time === '6:00 PM') return { backgroundColor: '#E8F4FD', color: '#2196F3' };
    return { backgroundColor: '#F5F5F5', color: '#666666' };
  };

  const getRightIcon = () => {
    if (task.showArrow) {
      return <Icon name="keyboard-arrow-right" size={24} color="#000000" />;
    }
    if (task.showPhone) {
      return <Icon name="access-time" size={24} color="#000000" />;
    }
    if (task.completed) {
      return <Icon name="check-circle" size={24} color="#4CAF50" />;
    }
    return <Icon name="radio-button-unchecked" size={24} color="#E0E0E0" />;
  };

  const renderIcon = () => {
    if (typeof task.icon === 'string') {
      // If icon is a string, use vector icon
      return <Icon name={task.icon} size={24} color={task.iconColor} />;
    } else {
      return (
        <Image 
          source={task.icon} 
          style={styles.iconImage}
          resizeMode="contain"
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.taskContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.iconContainer}>
            {renderIcon()}
          </View>
          
          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.title}>{task.title}</Text>
            <View style={styles.metaContainer}>
              {/* Time with clock icon and background */}
              {task.time && (
                <View style={[styles.timeContainer, getTimeStyle(task.time)]}>
                  <Icon name="access-time" size={12} color={getTimeStyle(task.time).color} />
                  <Text style={[styles.time, { color: getTimeStyle(task.time).color }]}>
                    {task.time}
                  </Text>
                </View>
              )}
              
              {/* Task counter for certain items - moved before tags */}
              {task.counter && (
                <View style={styles.counterContainer}>
                  <Text style={styles.counterText}>{task.counter}</Text>
                </View>
              )}

              {/* Tags with flag icons - combined into single tag */}
              <View style={styles.tagsContainer}>
                {task.tags && task.tags.length > 0 && (
                  <View style={[styles.tag, { backgroundColor: '#F6F6F6' }]}>
                    <Text style={[styles.tagText, { color: '#666666' }]}>
                      {task.tags.join(' | ')}
                    </Text>
                    <Icon name="flag" size={10} color="#666666" style={styles.tagIcon} />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>

        {/* Right side - Status/Action */}
        <View style={styles.rightContainer}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => onToggle && onToggle(task.id)}
          >
            {getRightIcon()}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      
      {/* Simple line separator */}
      <View style={styles.separator} />
    </View>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    completed: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconColor: PropTypes.string,
    showArrow: PropTypes.bool,
    showPhone: PropTypes.bool,
    counter: PropTypes.string,
  }).isRequired,
  onToggle: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 16,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  iconImage: {
    width: 50,
    height: 50,
    marginRight: 17
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 15,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F4FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  time: {
    fontSize: 11,
    color: '#2196F3',
    fontWeight: '500',
    marginLeft: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
  },
  tagIcon: {
    marginLeft: 5,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '500',
  },
  counterContainer: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  counterText: {
    fontSize: 11,
    color: '#666666',
    fontWeight: '500',
  },
  rightContainer: {
    marginLeft: 8,
  },
  actionButton: {
    padding: 8,
  },
});

export default TaskItem;