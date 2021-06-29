import React from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const HomeScreen=()=>{
    return(
        <View>
            <View style={styles.videoCard}>
                <View>
                    <Image style={styles.thumbnail} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg'}}/>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>15:23</Text>
                    </View>
                </View>

                <View style={styles.titleRow}>
                    <Image style={styles.avatarUri} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}/>
                    <View style={styles.middleContainer}>
                        <Text style={styles.title} numberOfLines={2}>Lorem ipsfsdfum dolorsdfsdfdssdfsdfsdfdfdfsdfsdfsdsdfsdfsdfsd sit amet, consectetur adipisicing elit.</Text>
                        <Text style={styles.subTitle}>Vadim 1.2M 2 month Ago</Text>
                    </View>
                    <Entypo name="dots-three-vertical" size={18} color="white" />
                </View>

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    thumbnail:{
        width:'100%',
        aspectRatio:16/9,
    },
    timeContainer:{
        backgroundColor:'#00000099',
        alignSelf:"flex-start",
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        position:'absolute',
        right:5,
        bottom:5,

    },
    time:{
        color:'white',
        fontSize:16,
    },
    videoCard:{

    },
    titleRow:{
        flexDirection:'row',
        padding:10,
        marginTop:3
    },
    avatarUri:{
        height:50,
        width:50,
        borderRadius:50,
        marginTop:4,
    },
    middleContainer:{
        marginHorizontal:13,
        flex:1,
    },
    subTitle:{
        color:'grey',
        fontSize:16,
        marginTop:3
    },
    title:{
        color:'white',
        fontSize:16,
        fontWeight:"500",
    },
});

export default HomeScreen;