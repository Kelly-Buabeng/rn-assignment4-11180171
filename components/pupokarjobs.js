import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const popularjobs = [
  {
    title: 'Jr Executive',
    image: require('../assets/google.png'),
    company: 'Google',
    location: 'Los Angeles, US',
    Salary: '$96,000/y',
    color: '#E31837'
  },
  {
    title: 'Product Manager',
    image: require('../assets/apple.png'),
    company: 'Apple',
    location: 'New York, US',
    Salary: '$84,000/y',
    color: 'grey'
  },
  {
    title: 'DevOps Engineer',
    image: require('../assets/facebook.png'),
    company: 'Facebook',
    location: 'Florida, US',
    Salary: '$86,000/y',
    color: '#0078D7'
  },
  {
    title: 'Data Scientist',
    image: require('../assets/cisco.png'),
    company: 'Cisco',
    location: 'Washington, US',
    Salary: '$90,000/y',
    color: '#F25022'
  
  }
];

export function PupokarJobs() {
  return (
    <>
      <View style={styles.pageContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <FlatList
          data={popularjobs}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.job}>
              <View style={styles.jobDetails}>
                <Image source={item.image} style={styles.image} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.jobTitle}>{item.title}</Text>
                  <Text style={styles.company}>{item.company}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <Text style={[styles.salary]}>{item.Salary}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    color: 'black',
    display: 'flex',
    gap: 15,
    fontFamily: 'sans-serif',
    padding: 15,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  seeAll: {
    color: 'grey',
  },
  job: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  jobDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  jobTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  company: {
    color: 'grey',
  },
  location: {
    color: 'grey',
  },
  salary: {
    fontWeight: '700',
    marginLeft: 'auto', 
  },
});
