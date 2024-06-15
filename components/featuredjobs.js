import React from 'react';
import { View, Text, FlatList, Image } from "react-native";

const jobs = [
  {
    title: 'Backend Developer',
    image: require('../assets/google.png'),
    company: 'Google',
    location: 'Remote',
    Salary: '300000 USD',
    color: '#E31837'
  },
  {
    title: 'DEVOPS Engineer',
    image: require('../assets/apple.png'),
    company: 'Apple',
    location: 'Remote',
    Salary: '400000 USD',
    color: 'grey'
  },
  {
    title: 'Database Administrator',
    image: require('../assets/microsoft.png'),
    company: 'Microsoft',
    location: 'Remote',
    Salary: '350000 USD',
    color: '#0078D7'
  },
  {
    title: 'Frontend Developer',
    image: require('../assets/facebook.png'),
    company: 'Facebook',
    location: 'Remote',
    Salary: '200000 USD',
    color: '#000000'
  },
  {
    title: 'Full Stack Developer',
    image: require('../assets/splash.png'),
    company: 'Splash',
    location: 'Remote',
    Salary: '250000 USD',
    color: '#E31837'
  },
  {
    title: 'Mobile Developer',
    image: require('../assets/amazon.png'),
    company: 'Amazon',
    location: 'Remote',
    Salary: '250000 USD',
    color: '#FFA500'
  }
];

export function FeaturedJobs() {
  return (
    <>
      <View style={{ color: 'black', display: 'flex', gap: 15, fontFamily: 'sans-serif', margin: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '800' }}>Featured Jobs</Text>
          <Text style={{ color: 'grey' }}>
            View all
          </Text>
        </View>
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{
              marginRight: 10,
              borderRadius: 20,
              padding: 15,
              height: 150,
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: item.color,
            }}>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <Image source={item.image} style={{ width: 50, aspectRatio: 1 }} />
                <View>
                  <Text style={{ fontWeight: '700', fontSize: 18, color: 'white', marginBottom: 2 }}>{item.title}</Text>
                  <Text style={{ color: 'white' }}>{item.company}</Text>
                </View>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'space-between' }}>
                <Text style={{ color: 'white' }}>{item.location}</Text>
                <Text style={{ color: 'white', fontWeight: '700' }}>{item.Salary}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}
