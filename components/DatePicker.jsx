import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const DatePicker = ({ selectedDate, onDateSelect }) => {
  const dates = [
    { date: 15, day: 'Sun' },
    { date: 16, day: 'Mon' },
    { date: 17, day: 'Tue' },
    { date: 18, day: 'Wed' },
    { date: 19, day: 'Thu' },
    { date: 20, day: 'Fri' },
    { date: 21, day: 'Sat' },
  ];

  return (
    <View style={styles.container}>
      {dates.map((item) => {
        const isSelected = selectedDate === item.date;
        return (
          <TouchableOpacity
            key={item.date}
            style={[styles.dateButton, isSelected && styles.selectedDateButton]}
            onPress={() => onDateSelect(item.date)}
            activeOpacity={0.8}
          >
            <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
              {item.day}
            </Text>
            <View style={[styles.dateBg, isSelected && styles.selectedDateBg]}>
              <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
                {item.date}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

DatePicker.propTypes = {
  selectedDate: PropTypes.number.isRequired,
  onDateSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  dateButton: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 0,
    borderRadius: 15,
    backgroundColor: '#F4F4F4',
    flex: 1,
    marginLeft: 10,
    overflow: 'hidden',
  },
  selectedDateButton: {
    backgroundColor: '#2C3399',
  },
  dayText: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  dateBg: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#E9E9E9',
  },
  selectedDateBg: {
    backgroundColor: '#151B73',
  },
  dateText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000000',
  },
  selectedDateText: {
    color: '#FFFFFF',
  },
});

export default DatePicker;
