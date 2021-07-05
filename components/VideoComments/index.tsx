import React from 'react'
import { View, Text } from 'react-native'
import {BottomSheetFlatList} from '@gorhom/bottom-sheet'
import comments from '../../assets/data/comments.json';
import VideoComment from '../VideoComment';

const VideoComments = () => {
    return (
        <View style={{flex:1, backgroundColor:'#141414'}}>
            <BottomSheetFlatList
            data={comments}
            renderItem={({item})=><VideoComment videoComment={item}/>}/>
        </View>
    )
}

export default VideoComments;
