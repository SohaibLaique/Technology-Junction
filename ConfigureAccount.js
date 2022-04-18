import React,{useState} from "react";
import {TouchableOpacity,StyleSheet,View,Text,TextInput} from 'react-native';
import { Fragment } from "react/cjs/react.production.min";
import {Picker} from '@react-native-picker/picker';

const ConfigureAccount = () => {

    const [selectedFoundation, setSelectedFoundation] = useState();

    return (

        <Fragment>

            <View style={styles.configureaccount}>
                <Text style={styles.configureaccount}>Configure your Account</Text>
            </View>

            <View style={styles.email_text}>
                <Text style={styles.email_text}>Email Address</Text>
                    <TextInput style={styles.email_textfield} underlineColorAndroid = "black"></TextInput>
            </View>

            <View style={styles.serverinfo_text}>
                <Text style={styles.serverinfo_text}>Server Information</Text>
            </View>
            
            <View style={styles.account_text}>
                <Text style={styles.account_text}>Account Type</Text>
                    <View style={{flexDirection:"row"}}>

                        <Picker 
                            selectedValue={selectedFoundation}
                            onValueChange={(itemValue) =>
                            setSelectedFoundation(itemValue)
  }
                            mode={'dropdown'}
                            style={{width:180, marginLeft:230, marginTop:-40,}}
  >
                            <Picker.Item label="IMAP" value="IMAP" />
                            <Picker.Item label="POP-3" value="POP-3" />
                             
                        </Picker>
                        
                    </View>
            <Text style={styles.accounttype_line}>__________________________</Text>

            </View>

            <View style={styles.incoming_text}>
                <Text style={styles.incoming_text}>Incoming Mail Server</Text>
                    <TextInput style={styles.incoming_textfield} underlineColorAndroid = "black"></TextInput>
            </View>

            <View style={styles.outgoing_text}>
                <Text style={styles.outgoing_text}>Outgoing Mail Server</Text>
                    <TextInput style={styles.outgoing_textfield} underlineColorAndroid = "black"></TextInput>
            </View>

            <View style={styles.logoninfo_text}>
                <Text style={styles.logoninfo_text}>Logon Information</Text>
            </View>

            <View style={styles.user_text}>
                <Text style={styles.user_text}>User Name</Text>
                    <TextInput style={styles.user_textfield} underlineColorAndroid = "black"></TextInput>
            </View>

            <View>
                <TouchableOpacity  style={styles.next} onPress={()=>{alert("Next")}}>
                    <Text style={styles.next_text}>Next</Text>
                </TouchableOpacity>
            </View>

            {/* <View>
                <TouchableOpacity  style={styles.Advance} onPress={()=>{alert("Advance Settings")}}>
                    <Text style={styles.advance_text}>Advance Settings</Text>
                </TouchableOpacity>
            </View> */}

        </Fragment>
    )
}

const styles = StyleSheet.create({

    configureaccount:{

        backgroundColor:"#58A2CB",
        fontSize:25,
        textAlign:"center",
        color:"black",
        lineHeight:55,
    },

    email_text:{

        fontSize:20,
        marginTop:25,
        marginLeft:5,
        color:"black",
    },

    email_textfield:{

        marginLeft:230,
        marginTop:-45,
    },

    serverinfo_text:{
        
        fontSize:22,
        marginTop:12,
        marginLeft:7,
        color:"black",
        fontWeight:'bold',
    },

    logoninfo_text:{
        
        fontSize:22,
        marginTop:12,
        marginLeft:7,
        color:"black",
        fontWeight:'bold',
    },

    account_text:{
    
        fontSize:20,
        marginTop:10,
        marginLeft:5,
        color:"black",
     },

    accounttype_line:{

        marginLeft:235,
        marginTop:-15,
        color:"black",
        marginTop:-20,
    },

    incoming_text:{
    
        fontSize:20,
        marginTop:15,
        marginLeft:5,
        color:"black",
    },

    incoming_textfield:{

        marginLeft:230,
        marginTop:-45,
     },

    outgoing_text:{
    
        fontSize:20,
        marginTop:10,
        marginLeft:5,
        color:"black",
    },

    outgoing_textfield:{

        marginLeft:230,
        marginTop:-45,
    },

    user_text:{
    
        fontSize:20,
        marginTop:15,
        marginLeft:5,
        color:"black",
    },

    user_textfield:{

         marginLeft:230,
        marginTop:-45,
    },

    next:{

        borderRadius:25,
        width:"25%",
        height:40,
        backgroundColor:"#58A2CB",
        fontSize:50,
        marginTop:50,
        marginLeft:275,
        textAlign:"center",
    },

    next_text:{
        width:"50%",    
        height:30,
        fontSize:21,
        color:"black",
        marginTop:5,
        marginLeft:28,
        textAlign:"center",
    },

    // Advance:{

    //     borderRadius:25,
    //     width:"55%",
    //     height:40,
    //     backgroundColor:"#58A2CB",
    //     fontSize:50,
    //     marginLeft:10,
    //     marginTop:-38,
    //     textAlign:"center",
    // },

    // advance_text:{
    //     width:"75%",    
    //     height:30,
    //     fontSize:21,
    //     color:"black",
    //     marginTop:5,
    //     marginLeft:22,
    //     textAlign:"center",
    // },

});

export default ConfigureAccount