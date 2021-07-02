import { StyleSheet } from "react-native";


const styles=StyleSheet.create({
    container:{
        marginBottom:2
    },
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
        fontSize:14,
    },
    videoCard:{

    },
    titleRow:{
        flexDirection:'row',
        padding:10,
        marginTop:3
    },
    avatarUri:{
        height:40,
        width:40,
        borderRadius:50,
        marginTop:4,
    },
    middleContainer:{
        marginHorizontal:13,
        flex:1,
    },
    subTitle:{
        color:'grey',
        fontSize:14,
        marginTop:3
    },
    title:{
        color:'white',
        fontSize:14,
        fontWeight:"500",
    },
    threeDots:{
        marginTop:10,
    },
});

export default styles;