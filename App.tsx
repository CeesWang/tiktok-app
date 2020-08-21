import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CreateScreen from './screens/CreateScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import HomeScreen from './screens/HomeScreen';
import InboxScreen from './screens/InboxScreen';
import ProfileScreen from './screens/ProfileScreen'; 
import HomeSvg from './icons/HomeSvg';
import SearchSvg from './icons/SearchSvg';
import CreateSvg from './icons/CreateSvg';
import ProfileSvg from './icons/ProfileSvg';
import InboxSvg from './icons/InboxSvg';
import { mockData } from './mock-data';
import { FeedContext } from './context';
interface FeedInterface {
  id: number, 
  video_url: string, 
  aspectRatio: number, 
  description: string, 
  likes: number, 
  hashtags: string, 
  place: string 
}
export default function App() {
  const [feed, setFeed] = useState<FeedInterface[]>(mockData);  
  const [color, setColor] = useState("");
  const Tab = createBottomTabNavigator();

  return (
    <FeedContext.Provider value={feed}>
      <NavigationContainer>
        
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#000000',
            style: {
              backgroundColor:'transparent',
              borderTopWidth: 0.3,
              position: 'absolute',
              elevation: 0,
            },
            labelStyle:{
              fontSize: 10,
              fontWeight: '600',
              marginBottom: 5
            }
          }} 
        >  
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <HomeSvg color={color} size={size} focused={focused}/>
              ),
            }}
          />
          <Tab.Screen name="Discover" component={DiscoverScreen}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <SearchSvg color={color} size={size} focused={focused}/>
              ),
            }}
          />
          <Tab.Screen name="Create" component={CreateScreen}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <CreateSvg color={color} size={size} focused={focused}/>
              ),
              tabBarLabel: () => null,
            }}
          />
          <Tab.Screen name="Inbox" component={InboxScreen}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <InboxSvg color={color} size={size} focused={focused}/>
              ),
            }}
          />
          <Tab.Screen name="Me" component={ProfileScreen}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <ProfileSvg color={color} size={size} active={focused}/>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FeedContext.Provider>
  );
}
