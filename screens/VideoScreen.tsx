import React , {useRef} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,FlatList,Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import video from '../assets/data/video.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo , AntDesign } from '@expo/vector-icons';
import VideoListItem from '../components/VideoListItem'
import videos from '../assets/data/videos.json';
import { Fontisto } from '@expo/vector-icons';
import {BottomSheetModal,BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import VideoPlayer from '../components/VideoPlayer'
import VideoComments from '../components/VideoComments';
import VideoComment from '../components/VideoComment';

import comments from '../assets/data/comments.json'


const VideoScreen =()=>{

    const commentsSheetRef=useRef<BottomSheetModal>(null);   // Referenced comments to null initially

    let viewsString=video.views.toString();
    
    if (video.views>1000000){
        viewsString = (video.views/1000000).toFixed(1)+'M'
    }else if(video.views>1000){
        viewsString=(video.views/1000).toFixed(1)+'K'
    }
    

    //opens comments bottom sheet
    const openComments=()=>{  //Initially it is set to null and after clicking the commentSheetRef is expanded to 100% of the parent section
        commentsSheetRef.current?.present();
    }


    return(
        <View style={{backgroundColor: '#000',flex:1}}>

            {/* Video Player */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>
            <View style={{flex:1,}}>
                {/* Video Info */}
                <View style={styles.videoInfoContainer}>   
                    <View style={styles.middleContainer}>
                        <Text style={styles.tags} numberOfLines={2}>{video.tags}</Text>
                        <Text style={styles.title} numberOfLines={2}>{video.title}</Text>
                        <Text style={styles.subTitle}>{video.user.name} {'\u2022'} {viewsString} {'\u2022'} {video.createdAt}</Text>
                    </View>
                    <Entypo style={styles.threeDots} name="dots-three-vertical" size={18} color="white" />
                </View>

                {/* Action List */}
                <View style={styles.actionListContainer}> 
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.actionListItem}>
                            <AntDesign name="like1" size={28} color='lightgrey'/>
                            <Text style={styles.actionListItemText}>{video.likes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                        <AntDesign name="dislike2" size={28} color="lightgrey" />
                            <Text style={styles.actionListItemText}>{video.likes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <Entypo name="chat" size={28} color="lightgrey" />
                            <Text style={styles.actionListItemText}>Live Chat</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <MaterialCommunityIcons name="share-outline" size={28} color="lightgrey" />
                            <Text style={styles.actionListItemText}>Share</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={28} color="lightgrey" />
                            <Text style={styles.actionListItemText}>Download</Text>
                        </View>
                        <View style={styles.actionListItem}>
                        <Fontisto name="save" size={28} color="lightgrey" />
                            <Text style={styles.actionListItemText}>Save</Text>
                        </View>
                    </ScrollView>
                </View>

                {/* User Info */}
                <View style={styles.userInfo}>
                    <Image source={{uri: video.user.image}} style={styles.avatar}/>

                    <View style={styles.UserNameSubs}>
                        <Text style={styles.userName}>{video.user.name}</Text>
                        <Text style={styles.subs}>{video.user.subscribers} subscribers</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:12,marginBottom:15,marginHorizontal:10}}>
                        <Text style={styles.subscribe}>SUBSCRIBE</Text>
                        <AntDesign name="bells" size={30} color="lightgrey" />
                    </View>
                </View>

                {/* Comments */}
                <Pressable onPress={openComments} style={styles.commentSection}>
                    <Text style={styles.commentHeader}>Comments 333</Text>
                    <VideoComment videoComment={comments[0]}/>
                </Pressable>

                {/* All Comments */}
                
                <BottomSheetModal
                ref={commentsSheetRef}
                snapPoints={["62%"]}
                index={0}
                backgroundComponent={({ style }) => (
                    <View style={[style, { backgroundColor: "#4d4d4d" }]} />
                )}
                >
                    <VideoComments />
                </BottomSheetModal> 
            </View>
        </View>
    )
}

const VideoScreenWithRecommendation=()=>{
    return(
        <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
            <BottomSheetModalProvider>
                <FlatList
                data={videos}
                renderItem={({ item }) => <VideoListItem video={item} />}
                ListHeaderComponent={VideoScreen}
                />
            </BottomSheetModalProvider>
        </SafeAreaView>
    )
}



export default VideoScreenWithRecommendation;

const styles=StyleSheet.create({
    videoPlayer:{
        width:'100%',
        aspectRatio:16/9,
    },
    middleContainer:{
        marginHorizontal:10,
        flex:1,
    },
    subTitle:{
        color:'grey',
        fontSize:14,
        marginTop:5
    },
    title:{
        color:'white',
        fontSize:16,
        fontWeight:"500",
        lineHeight:23, 
    },
    threeDots:{
        marginVertical:34,
        marginHorizontal:5
    },
    videoInfoContainer:{
        flexDirection:'row',
        padding:0,
        marginTop:10
    },
    tags:{
        color:'#0094e3',
        fontSize:14,
        fontWeight:'500',
        marginVertical:2,
    },
    actionListContainer:{
        marginVertical:7,
        borderBottomColor:'lightgrey',
        borderBottomWidth:0.2,
    },
    actionListItem:{
        justifyContent:'space-around',
        height:60,
        alignItems: 'center',
        marginHorizontal:14,
        marginBottom:12,
    },
    actionListItemText:{
        color:'white',
        fontSize:14,
    },
    avatar:{
        height:50,
        width:50,
        borderRadius:25,
        marginBottom:15,
        marginHorizontal:10
    },
    userInfo:{
        marginTop:6,
        flexDirection:'row',
        borderBottomWidth:0.2,
        borderBottomColor:'lightgrey',
    },
    userName:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    UserNameSubs:{
        marginHorizontal:8,
        justifyContent:'space-around',
        flex:1,
        marginBottom:15
    },
    subs:{
        color:'lightgrey',
        
    },
    subscribe:{
        color:'red',
        fontSize:18,
        marginHorizontal:15,
        fontWeight:'bold'
    },
    commentHeader:{
        color:'lightgrey',
        fontWeight:'bold',
    },
    commentSection:{
        margin:8,
        paddingBottom:10,
    },
    avatarComment:{
        height:40,
        width:40,
        borderRadius:50,
        marginTop:7
    },
    comment:{
        color:'white',
        marginTop:7,
        marginLeft:7,
        flex:1
    }
});

