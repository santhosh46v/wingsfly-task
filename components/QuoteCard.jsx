import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuoteCard = () => {
  const progress = 60; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Quote</Text>
      <Text style={styles.quote}>
        "You must do the things, you think you cannot do."
      </Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Progress {progress}%</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
          <View style={[styles.progressThumb, { left: `${progress}%` }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
    textAlign: 'center'
  },
  quote: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 10,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#151B73',
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    overflow: 'visible',
    position: 'relative',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A47A3',
    borderRadius: 10,
  },
  progressThumb: {
    position: 'absolute',
    top: -6, 
    width: 18,
    height: 18,
    backgroundColor: '#4A47A3',
    borderRadius: 9,
    marginLeft: -9, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default QuoteCard;