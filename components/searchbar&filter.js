import React from 'react';
import { View, TextInput, StyleSheet, TouchableHighlight } from "react-native";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchContainer}
          placeholder="Search a job or position "
          placeholderTextColor="black"
        />
        <MagnifyingGlassIcon
          size={25}
          style={styles.magnifyingIcon}
        />
      </View>
      <TouchableHighlight style={styles.filterButtonContainer}>
        <AdjustmentsHorizontalIcon style={{ color: 'white' }} size={30} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    gap: 4
  },
  inputContainer: {
    position: 'relative',
    flex: 1,
  },
  searchContainer: {
    backgroundColor: 'white',
    paddingLeft: 45,
    width: '100%',
    height: 50,
    borderRadius: 15,
    fontSize: 18,
    fontWeight: '500'
  },
  magnifyingIcon: {
    position: 'absolute',
    top: 14,
    left: 12,
    color: 'black'
  },
  filterButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  }
});
