import React from "react";
import {TouchableOpacity,StyleSheet,View,Text,TextInput,Image} from 'react-native';
import { Fragment } from "react/cjs/react.production.min";
import DialogBox from "react-native-dialogbox";
import { BlockOutlined } from "@material-ui/icons";

const MainScreen = () => {

    return(

        <Fragment>

            <View style={styles.inbox_bar}>
                <Text style={styles.inbox_bar}> </Text>
            </View>

            

            <View>
                <Image  style={styles.menubar_icon} source={require('../assets/menubar.png')} resizeMode='stretch'/>
            </View>

            <View>
                <TouchableOpacity   style={styles.menubar_icon} onPress={()=>{alert("Menu")}}></TouchableOpacity>
            </View>

            <View>
                <Text style={styles.inbox_text}>Inbox</Text>
            </View>

            <View>
                <TouchableOpacity   style={styles.new} onPress={()=>{alert("New")}}>
                <Text style={styles.new_text}>New</Text>
                </TouchableOpacity>
            </View>

            

            <View style={styles.mail2_bar}>
            {/* <TouchableOpacity   style={styles.mail1_bar} onPress={()=>{alert("Mail 1")}}> */}
                <Text style={styles.mail2_bar}> </Text>
                {/* </TouchableOpacity> */}
            </View>

            <View style={styles.mail1_bar}>
            {/* <TouchableOpacity   style={styles.mail1_bar} onPress={()=>{alert("Mail 1")}}> */}
                <Text style={styles.mail1_bar}> </Text>
                {/* </TouchableOpacity> */}
            </View>

            

            <View style={styles.bottom_bar}>
                <Text style={styles.bottom_bar}> </Text>
            </View>

            <View>
                <Text style={styles.thismonth_text}>This month</Text>
            </View>

{/* <View>
                <Text style={styles.Securityalert_text}>Security alert</Text>
            </View>

<View>
                <Text style={styles.Google_text}>Google</Text>
            </View> */}

            


            <View>
                <TouchableOpacity   style={styles.mail1_icon} onPress={()=>{alert("Mail")}}>
                    
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.mail2_icon} onPress={()=>{alert("Mail")}}>
                    
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.mail3_icon} onPress={()=>{alert("Mail")}}>
                    
                </TouchableOpacity>
            </View>

            <View>
            {/* <TouchableOpacity   style={styles.G_text} onPress={()=>{alert("Mail")}}> */}
            <Text style={styles.F_text}>F</Text>
            {/* </TouchableOpacity> */}
            </View>
            
            <View>
            {/* <TouchableOpacity   style={styles.G_text} onPress={()=>{alert("Mail")}}> */}
            <Text style={styles.G_text}>G</Text>
            {/* </TouchableOpacity> */}
            </View>



<View>
                <TouchableOpacity   style={styles.compose_button} onPress={()=>{alert("Compose Mail")}}>
                    <Image  style={styles.composemail_icon} source={require('../assets/composemail.png')} resizeMode='stretch'/>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity  style={styles.mail_icon} onPress={()=>{alert("Mail")}}>
                    <Image  style={styles.mail_icon} source={require('../assets/mail.png')} resizeMode='stretch'/>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.search_icon} onPress={()=>{alert("Search")}}>
                    <Image  style={styles.search_icon} source={require('../assets/search.png')} resizeMode='stretch'/>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.calendar_icon} onPress={()=>{alert("Calendar")}}>
                    <Image  style={styles.calendar_icon} source={require('../assets/calendar.png')} resizeMode='stretch'/>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.mailicon_text}>Mail</Text>
            </View>

            <View>
                <Text style={styles.searchicon_text}>Search</Text>
            </View>

            <View>
                <Text style={styles.calendaricon_text}>Calendar</Text>
            </View>













            <View>
            {/* <TouchableOpacity   style={styles.G_text} onPress={()=>{alert("Mail")}}> */}
            <Text style={styles.Y_text}>Y</Text>
            {/* </TouchableOpacity> */}
            </View>

            <View>
            <Text style={styles.GitHub_text}>GitHub</Text>
            </View>

            <View>
            <Text style={styles.Fiverr_text}>Fiverr</Text>
            </View>

            <View>
            <Text style={styles.Youtube_text}>Youtube</Text>
            </View>

            <View>
            <Text style={styles.mail1_text}>Here's your GitHub launch code,@Sohaib...</Text>
            </View>

            <View>
            <Text style={styles.mail2_text}>Reset Your Fiverr Password Hi Sohaib...</Text>
            </View>

            <View>
            <Text style={styles.mail3_text}>Your account can't be accessed without the...</Text>
            </View>

            <View>
            <Text style={styles.firstline}>______________________________________________________________</Text>
            </View>
            

            <View>
                <Text style={styles.lastmonth_text}>Last month</Text>
            </View>

            

            

            

    

        </Fragment>
    )
}

const styles = StyleSheet.create({

    inbox_bar:{

        backgroundColor:"#58A2CB",
        lineHeight:55,
    },

    // mail3_bar:{
    //     backgroundColor:"#EFEEEE",
    //     lineHeight:45,
    //     marginTop:-150,

    // },

    firstline:{

        marginLeft:5,
        marginTop:-750,

    },

    mail1_bar:{

        backgroundColor:"#EFEEEE",
        lineHeight:45,
        marginTop:10,
    },

    mail2_bar:{

        backgroundColor:"#EFEEEE",
        lineHeight:45,
        marginTop:10,
    },

    bottom_bar:{

        backgroundColor:"#EFEEEE",
        marginTop:378,
    },

    thismonth_text:{

        fontSize:15,
        marginTop:-900,
        marginLeft:10,
        color:"black",
        fontWeight:"bold",
    },

    lastmonth_text:{

        fontSize:15,
        marginTop:-720,
        marginLeft:10,
        color:"black",
        fontWeight:"bold",
    },

    mail1_icon:{

        borderRadius:30,
        width:"11%",
        height:45,
        backgroundColor:"#0072C6",
        marginTop:-807,
        marginLeft:10,
    },

    mail2_icon:{

        borderRadius:30,
        width:"11%",
        height:45,
        backgroundColor:"#0072C6",
        marginTop:-872,
        marginLeft:10,
    },

    mail3_icon:{

        borderRadius:30,
        width:"11%",
        height:45,
        backgroundColor:"#0072C6",
        marginTop:-685,
        marginLeft:10,
    },

    G_text:{
        fontSize:25,
        marginTop:-868,
        marginLeft:23,
        color:"black",

    },

    F_text:{
        fontSize:25,
        marginTop:-800,
        marginLeft:25,
        color:"black",

    },

    Y_text:{
        fontSize:25,
        marginTop:-682,
        marginLeft:25,
        color:"black",

    },

    GitHub_text:{
        width:"36%",
        fontSize:17,
        marginTop:-875,
        marginLeft:60,
        fontWeight:"bold",
        color:"black",

    },

    Fiverr_text:{
        width:"36%",
        fontSize:17,
        marginTop:-813,
        marginLeft:60,
        fontWeight:"bold",
        color:"black",

    },

    Youtube_text:{
        width:"36%",
        fontSize:17,
        marginTop:-685,
        marginLeft:60,
        fontWeight:"bold",
        color:"black",

    },

    mail1_text:{
        fontSize:17,
        marginTop:-855,
        marginLeft:60,
        color:"black",

    },

    mail2_text:{
        fontSize:17,
        marginTop:-790,
        marginLeft:60,
        color:"black",

    },

    mail3_text:{
        fontSize:17,
        marginTop:-665,
        marginLeft:60,
        color:"black",

    },

    // Securityalert_text:{

    //     width:"50%",
    //     fontSize:16,
    //     marginTop:-532,
    //     marginLeft:32,
    //     fontWeight:"bold",
    //     color:"black",

    // },











    menubar_icon:{

        marginLeft:-5,
         marginTop:-68,
         width:85,
         height:85,
    },

    mail_icon:{

        marginLeft:28,
         marginTop:-187,
         width:27,
         height:30,
    },

    search_icon:{

        marginLeft:92 ,
         marginTop:-187,
         width:35,
         height:35,
    },

    calendar_icon:{

        marginLeft:160,
         marginTop:-187,
         width:30,
         height:30,
    },

    compose_button:{

        borderRadius:30,
        width:"15%",
        height:55,
        backgroundColor:"#58A2CB",
        marginTop:-450,
        marginLeft:320,
    },

    composemail_icon:{

        marginLeft:12 ,
         marginTop:8,
         width:40,
         height:40,
    },

    inbox_text:{

        fontSize:25,
        marginTop:-78,
        marginLeft:80,
        color:"black",
    },

    new:{

        borderRadius:20,
        width:"22%",
        height:35,
        backgroundColor:"#0072C6",
        fontSize:50,
        marginTop:-78,
        marginLeft:300,
        textAlign:"center",
    },

    new_text:{
    
       
        fontSize:22,
        marginLeft:23,
        marginTop:1,
        color:"black",
    },

    mailicon_text:{

        fontSize:15,
        marginTop:-349,
        marginLeft:57,
        color:"black",
    },

    searchicon_text:{

        fontSize:15,
        marginTop:-349,
        marginLeft:181,
        color:"black",
    },

    calendaricon_text:{

        fontSize:15,
        marginTop:-349,
        marginLeft:305,
        color:"black",
    },
});

export default MainScreen