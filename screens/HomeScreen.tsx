import React from 'react';
import {Text, View} from 'react-native';
import { Video } from 'expo-av';
//view pager 
const HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
        <Video
          source={{ uri: 'https://www.youtube.com/watch?v=HDvL73k_M8Y' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="stretch"
          shouldPlay
          isLooping
          style={{ width: '100%', height: '100%' }}
        />
      </View>
    );
}

export default HomeScreen;