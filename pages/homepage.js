import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SearchBar } from '../components/searchbar&filter';
import { FeaturedJobs } from '../components/featuredjobs';
import { PupokarJobs } from '../components/pupokarjobs';

export default function HomePage() {
  const route = useRoute();
  const { username, password } = route.params || {};

  return (
    <>
      <View style={{color:'black',display:'flex',gap:30,margin:25,height:'100%',fontFamily:'sans-serif'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:50}}>
          <View>
            <Text style={{fontSize:25,fontWeight:'800'}}>
              Kelly Buabeng
            </Text>
            
            <Text style={{color:'grey',fontSize:17}}>
              buabengkelly@gmail.com
            </Text>
          </View>
          <Image source={require('../assets/accountPhoto.png')} style={{width:40,aspectRatio:1}} />
        </View>
        <SearchBar />
        <FeaturedJobs />
        <PupokarJobs />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    display: 'flex',
    gap: 30,
    margin: 25,
    height: '100%',
    fontFamily: 'Arial', 
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  username: {
    fontSize: 25,
    fontWeight: 'bold', 
  },
  email: {
    color: 'grey',
    fontSize: 20,
  },
  image: {
    width: 35,
    aspectRatio: 1,
  },
});
