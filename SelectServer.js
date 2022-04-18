import React from "react";
import {TouchableOpacity,StyleSheet,View,Text,Image} from 'react-native';
import { Fragment } from "react/cjs/react.production.min";
// import Ionicons from 'react-native-vector-icons/Ionicons'

const SelectServer = () => {
    return (
        <Fragment>

            {/* <View style={styles.screen_color}> */}

            <View style={styles.server}>
                <Text style={styles.server}>Select Server</Text>
            </View>

            <View>
                <TouchableOpacity   style={styles.gmail} onPress={()=>{alert("Gmail")}}>
                    <Image  style={styles.gmail_icon} source={require('../assets/gmail.png')} resizeMode='stretch'/>
                        <Text style={styles.gmail_text}>Gmail</Text>
               </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.yahoo} onPress={()=>{alert("Yahoo!")}}>
                    <Image  style={styles.yahoo_icon} source={require('../assets/yahoo.png')} resizeMode='stretch'/>
                        <Text style={styles.yahoo_text}>Yahoo!</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.outlook} onPress={()=>{alert("Outlook")}}>
                    <Image  style={styles.outlook_icon} source={require('../assets/outlook.png')} resizeMode='stretch'/>
                        <Text style={styles.outlook_text}>Outlook</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.others} onPress={()=>{alert("Others")}}>
                    <Text style={styles.others_text}>Others</Text>
                </TouchableOpacity>
            </View>

        {/* </View> */}

        </Fragment>
    )
}

const styles = StyleSheet.create({

    server:{

        backgroundColor:"#58A2CB",
        fontSize:30,
        textAlign:"center",
        color:"black",
        lineHeight:50,
    },

    gmail_icon:{

        marginLeft:20,
        marginTop:10,
        width: 33,
        height:33,
    },

    yahoo_icon:{

        marginLeft:20,
        marginTop:9,
        width: 38,
        height:38,
    },

    outlook_icon:{

        marginLeft:20,  
        marginTop:9,
        width: 38,
        height:38,
    },

    gmail:{

        borderRadius:50,
        width:"50%",
        height:55,
        backgroundColor:"#58A2CB",
        marginTop:70,
        marginLeft:100,
    },

    yahoo:{

        borderRadius:50,
        width:"50%",
        height:55,
        backgroundColor:"#58A2CB",
        marginTop:70,
        marginLeft:100,
    },

    outlook:{

        borderRadius:50,
        width:"50%",
        height:55,
        backgroundColor:"#58A2CB",
        marginTop:70,
        marginLeft:100,
    },

    others:{

        borderRadius:50,
        width:"50%",
        height:55,
        backgroundColor:"#58A2CB",
        marginTop:70,
        marginLeft:100,
    },

    gmail_text:{

        width:"50%",    
        height:30,
        fontSize:28,
        color:"black",
        marginTop:-35,
        marginLeft:65,
        textAlign:"center",
    },

    yahoo_text:{
        width:"50%",    
        height:30,
        fontSize:28,
        color:"black",
        marginTop:-40,
        marginLeft:75,
        textAlign:"center",
    },

    outlook_text:{
        width:"50%",    
        height:30,
        fontSize:28,
        color:"black",
        marginTop:-40,
        marginLeft:78,
        textAlign:"center",
    },

    others_text:{
        width:"50%",    
        height:30,
        fontSize:25,
        color:"black",
        marginTop:10,
        marginLeft:50,
        textAlign:"center",
    },

});

export default SelectServer