import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import { Video } from 'expo-av';
import { FeedContext } from '../context';
//view pager 
const HomeScreen = () => {
    const feed = useContext(FeedContext);
    console.log(feed);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Video
          source={{ uri: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
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