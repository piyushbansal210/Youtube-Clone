import React from 'react'
import { View, Text } from 'react-native'
import {Video} from 'expo-av';
import styles  from './style';



interface VideoPlayerProps {
    videoURI:string;
    thumbnailURI:string;
}

const VideoPlayer = (props:VideoPlayerProps) => {

    const {videoURI, thumbnailURI}=props;

    return (
        <View>
            <Video 
            source={{uri: videoURI}}
            style={{width:'100%',aspectRatio:16/9}}
            posterSource={{uri:thumbnailURI}}
            posterStyle={{resizeMode:'cover'}}
            useNativeControls
            resizeMode="contain"
              />
        </View>
    )
}

export default VideoPlayer;
