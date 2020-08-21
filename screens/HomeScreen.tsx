import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import { Audio, Video } from 'expo-av';
import { FeedContext } from '../context';
import ViewPager from '@react-native-community/viewpager';
//view pager 
const HomeScreen = () => {
    const feed = useContext(FeedContext);
    const [currentPage, setCurrentPage] = useState(0);

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
      <ViewPager style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} 
        initialPage={0}
        onPageSelected={e => {
          setCurrentPage(e.nativeEvent.position);
        }}
        orientation="vertical"
      >
        {feed.map((entry, index) => {
          return <Video key={index}
            source={{ uri: entry.video_url }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay={currentPage === index}
            resizeMode="stretch"
            style={{ width: '100%', height: '100%'}}
          />                    
        })}
      </ViewPager>
    );
}

export default HomeScreen;