import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import VideoListItem from '../components/VideoListItem';

import videos from '../assets/data/videos.json'

const HomeScreen=()=>{
    return(
        <FlatList 
        data={videos}
        renderItem={({item})=><VideoListItem video={item}/>}
        keyExtractor={item => item.id}
        />
    )
}


export default HomeScreen;