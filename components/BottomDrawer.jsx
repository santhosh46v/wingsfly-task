import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomDrawer = ({ isOpen, onClose, onOptionSelect }) => {
  const translateY = React.useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropOpacity = React.useRef(new Animated.Value(0)).current;
  const scaleValue = React.useRef(new Animated.Value(0.8)).current;
  const optionAnimations = React.useRef(
    Array.from({ length: 4 }, () => new Animated.Value(0))
  ).current;

  const options = [
    {
      id: 'habit',
      title: 'Habit',
      description: 'Activity that repeats over time it has detailed tracking and Statistics.',
      useImage: true,
      imageSource: require('../assets/icons/brain.png'),
    },
    {
      id: 'recurring',
      title: 'Recurring Task',
      description: 'Activity that repeats over time it has detailed tracking and Statistics.',
      icon: 'repeat',
      color: '#151B73',
      useImage: false,
    },
    {
      id: 'task',
      title: 'Task',
      description: 'Single instance activity without tracking over time.',
      icon: 'check',
      color: '#151B73',
      useImage: false,
    },
    {
      id: 'goal',
      title: 'Goal of the Day',
      description: 'A specific target for the day without detailed tracking action within a single day.',
      useImage: true,
      imageSource: require('../assets/icons/goal.png'),
    },
  ];

  const handleOptionPress = (option) => {
    // Add press animation
    const pressAnimation = Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]);

    pressAnimation.start(() => {
      if (onOptionSelect) {
        onOptionSelect(option);
      }
      onClose();
    });
  };

  useEffect(() => {
    if (isOpen) {
      // Reset option animations
      optionAnimations.forEach(anim => anim.setValue(0));
      
      Animated.parallel([
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 80,
          friction: 6,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        const optionAnimationSequence = optionAnimations.map((anim, index) =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 200,
            delay: index * 100,
            useNativeDriver: true,
          })
        );
        
        Animated.stagger(50, optionAnimationSequence).start();
      });
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 0.8,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen]);

  const renderOptionIcon = (option) => {
    if (option.useImage && option.imageSource) {
      return (
        <Image
          source={option.imageSource}
          style={styles.optionImage}
          resizeMode="contain"
        />
      );
    }
    
    return (
      <Icon 
        name={option.icon} 
        size={24} 
        color={option.color} 
      />
    );
  };

  return (
    <Modal transparent visible={isOpen} animationType="none">
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]} />
        </TouchableWithoutFeedback>
        
        <Animated.View style={[
          styles.drawer, 
          { 
            transform: [
              { translateY },
              { scale: scaleValue }
            ] 
          }
        ]}>
          <View style={styles.handle} />
          
          <View style={styles.content}>
            {options.map((option, index) => (
              <Animated.View
                key={option.id}
                style={{
                  opacity: optionAnimations[index],
                  transform: [
                    {
                      translateY: optionAnimations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      }),
                    },
                  ],
                }}
              >
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleOptionPress(option)}
                  activeOpacity={0.7}
                >
                  <View style={styles.optionIcon}>
                    {renderOptionIcon(option)}
                  </View>
                  <View style={styles.optionContent}>
                    <Text style={styles.optionTitle}>{option.title}</Text>
                    <Text style={styles.optionDescription}>{option.description}</Text>
                  </View>
                  <Animated.View
                    style={{
                      transform: [
                        {
                          translateX: optionAnimations[index].interpolate({
                            inputRange: [0, 1],
                            outputRange: [10, 0],
                          }),
                        },
                      ],
                    }}
                  >
                    <Icon name="chevron-right" size={30} color="#151F73" />
                  </Animated.View>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

BottomDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOptionSelect: PropTypes.func,
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
  drawer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    minHeight: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionImage: {
    width: 24,
    height: 24,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 16,
  },
});

export default BottomDrawer;