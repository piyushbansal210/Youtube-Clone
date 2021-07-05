import React from 'react'
import { View, Text ,Image} from 'react-native'
import styles from './style';
import {VideoCommentType} from '../../types';



export type VideoCommentProps={
    videoComment:VideoCommentType;
}

const VideoComment = (props: VideoCommentProps) => {

    const {videoComment}=props;

    return (
        <View style={{flexDirection:'row'}}>
            <Image source={{uri: videoComment.user.image}} style={styles.avatarComment}/>
            <Text numberOfLines={2} style={styles.comment}>{videoComment.comment}</Text>
        </View>
    )
}

export default VideoComment;

