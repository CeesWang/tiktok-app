import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import { Audio, Video } from 'expo-av';
import { FeedContext } from '../context';
//view pager 
const HomeScreen = () => {
    const feed = useContext(FeedContext);

    useEffect(()=> {
      Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false
      });
    })

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Video
          source={{ uri: feed[2].video_url }}
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