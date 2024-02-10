import * as React from "react";
import {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View, } from 'react-native';
import {//title style
InputTitle
} from "../components/GenericTextLayout";

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { ScrollView} from 'react-native';




const InputScreen = () => {
  //----------------------------------input textarea--------------------------------
  const [text, onChangeText] = React.useState('Enter patient ID Here');
  const [number, onChangeNumber] = React.useState('');
  const textArea1 = 'Hint!  \nIf you don\'t know the id, you can use your name to instead';
  const [show, setShow] = useState(false);
  //----------------------------------date picker--------------------------------
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  //-----------------------------------filiter followings--------------------------------
  // State for button filter
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  // State for date range filter
  const toggleDateRange = () => {
    setShow(!show);
  };

  const formatDate = (date) => {
    if (!date) return '';
    // Example formatting: you can adjust the format as needed
    return date.toLocaleDateString();
  };

  // State for number filter
  const [number1, setNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  // State for search bar
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const suggestions = ["heart rate", "places", "blood pressure", "temperature", "location"];
  useEffect(() => {
    // Split the search query into terms using commas and trim whitespace
    const terms = searchQuery.split(',').map(term => term.trim());
    // Consider only the last term for filtering
    const lastTerm = terms[terms.length - 1];
    // Filter suggestions based on the last term
    const filtered = lastTerm 
      ? suggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(lastTerm.toLowerCase()))
      : [];   
    setFilteredSuggestions(filtered);
  }, [searchQuery]);
  const onSuggestionPress = (suggestion) => {
    const terms = searchQuery.split(',').map(term => term.trim());
    terms[terms.length - 1] = suggestion; // Replace the last term with the selected suggestion
    setSearchQuery(terms.join(', ')); // Update the search query with all terms
    setFilteredSuggestions([]); // Clear suggestions after selection
  };

  

    const handleNumberChange = (input) => {
      // Check if the input is a valid number
      if (isNaN(input) || input.includes(' ')) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
      setNumber(input);
    }


  return (
    <SafeAreaView>
      {/*input tile and box */}
      <InputTitle titleText={"Patient ID or Name:"} />
      <TextInput 
        classname="input1"
        style={[styles.input, {backgroundColor: '#ffff'}]}
        placeholder="Enter patient ID Here"
        onChangeText={onChangeText => setText(onChangeText)}
        defaultValue={''}
      />
      <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>  {/*1084ff: royal blue */}
        <Text style={{color: 'white'}}>{textArea1} </Text>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
          <View 
            style={styles.arrowLeft} >
          </View>
        </View>
      </View>
      {/*select tile and box */}
      <InputTitle titleText={"Query objective"} />
      <select 
        name="selectedFruit"
        style={styles.input}
        defaultValue={['default']}
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="default">Select Result You Wish to View</option> {/*If you want more, just add more lines like this*/}
      </select>

      {/*submit button */}
      <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>  {/*1084ff: royal blue */}
        <Text style={{color: 'white'}}>{textArea1} </Text>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
          <View 
            style={styles.arrowLeft} >
          </View>
        </View>
      </View>

      {/*date filiter */}
      {/* Toggle button for DateRange */}
      <TouchableOpacity onPress={toggleDateRange}>
        <Text style={{marginTop: 20}}>   Show/Hide Date Range: Selected Dates: {formatDate(state[0].startDate)} - {formatDate(state[0].endDate)}</Text>
      </TouchableOpacity>
      {/* Conditionally render the DateRange component */}
      {show && (
        <ScrollView style={{ flex: 2 }} showsVerticalScrollIndicator={false}>
          <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </ScrollView>
      )}

      {/*number filiter*/}
      <View style={styles.container}>
      <Text>Enter the amount of data you want to display:
      <TextInput
        style={styles.input}
        keyboardType="numeric" // Ensures the keyboard is suitable for numeric input
        value={number1}
        onChangeText={handleNumberChange}
        placeholder="Enter a number"
      />
      {!isValid && <Text style={styles.errorText}>Please enter a valid number</Text>}
      </Text>
    </View>

      {/* Search bar */}
      <InputTitle titleText={"Others items you want to search:"} />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search here..."
        />
        {/* Render suggestions based on the last entered term */}
        {filteredSuggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            <ScrollView>
              {filteredSuggestions.map((suggestion, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => onSuggestionPress(suggestion)}
                  style={styles.suggestion}
                >
                  <Text>{suggestion}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>

      {/*submit button */}
      <View style={styles.buttonContainer}>
        <View style={styles.container}>
          <View style={styles.countContainer}>
            <Text>Count: {count}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    
  );
};


//components' styles
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007bff', // A nice blue color
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  balloon: {
    maxWidth: 300,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1084ff', // Royal blue
    marginLeft: 10,
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  arrowLeftContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  arrowLeft: {
    left: -20,
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 52,
    left: 12,
    right: 12,
    zIndex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
    maxHeight: 200, // Set a max height for the container
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    padding: 10,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default InputScreen;