import React from 'react';
import { View,Text,Image } from 'react-native';

import styles from './style';
import { Entypo } from '@expo/vector-icons';
import {Video} from '../../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native'; 
 
export type VideoListItemProps={
    video :Video;
}


const VideoListItem=(props:VideoListItemProps)=>{

    const {video}=props;
    const time=video.duration;
    const minutes=Math.floor(time/60);
    const seconds=time%60;

    let viewsString=video.views.toString();
    
    if (video.views>1000000){
        viewsString = (video.views/1000000).toFixed(1)+'M'
    }else if(video.views>1000){
        viewsString=(video.views/1000).toFixed(1)+'K'
    }

    const onPress=()=>{
        console.log('hi')
        navigation.navigate('VideoScreen')
    }

    const navigation=useNavigation();

    

    return(
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <View style={styles.videoCard}>
                <View>
                    <Image style={styles.thumbnail} source={{uri: video.thumbnail}}/>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>{minutes}:{seconds<10?'0':''}{seconds}</Text>
                    </View>
                </View>

                <View style={styles.titleRow}>
                    <Image style={styles.avatarUri} source={{uri: video.user.image}}/>
                    <View style={styles.middleContainer}>
                        <Text style={styles.title} numberOfLines={2}>{video.title}</Text>
                        <Text  style={styles.subTitle}>{video.user.name} {'\u2022'} {viewsString} {'\u2022'} {video.createdAt}</Text>
                    </View>
                    <Entypo style={styles.threeDots} name="dots-three-vertical" size={18} color="white" />
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default VideoListItem;