import React,{useState} from "react";
import {TouchableOpacity,StyleSheet,View,Text,TextInput} from 'react-native';
import { Fragment } from "react/cjs/react.production.min";
import { Picker } from "@react-native-picker/picker";
// import { Icon } from "react-native-vector-icons/icon";

const AdvanceSettings = () => {

    const [selectedFoundation, setSelectedFoundation] = useState();
    const [selectedFoundations, setSelectedFoundations] = useState();

    return(

        <Fragment>

            <View style={styles.advancesettings}>
                <Text style={styles.advancesettings}>Advance Settings</Text>
            </View>
            
             <View style={styles.incomingport_text}>
                <Text style={styles.incomingport_text}>Incoming Port</Text>
                    <TextInput style={styles.incomingport_textfield} underlineColorAndroid = "black"></TextInput>
            </View>

            <View style={styles.incomingencrypt_text}>
                <Text style={styles.incomingencrypt_text}>Select Incoming Encryption</Text>
                    <View style={{flexDirection:"row"}}>

                        <Picker 
                            selectedValue={selectedFoundation}
                            onValueChange={(itemValue) =>
                            setSelectedFoundation(itemValue)
  }
                            mode={'dropdown'}
                            style={{width:160, marginLeft:245, marginTop:-40, }}
  >
                            <Picker.Item label="NONE" value="NONE" />
                            <Picker.Item label="IMAP" value="IMAP" />
                            <Picker.Item label="POP-3" value="POP-3" />
                             
                        </Picker>
                        
                    </View>
                        <Text style={styles.incomingportencrypt_line}>_______________________</Text>
            </View>

            <View style={styles.imap_text}>
                <Text style={styles.imap_text}>(IMAP)</Text>
            </View>

            <View style={styles.outgoingport_text}>
                <Text style={styles.outgoingport_text}>Outgoing Port</Text>
                    <TextInput style={styles.outgoingport_textfield} underlineColorAndroid = "black"></TextInput>
            </View>

            <View style={styles.outgoingencrypt_text}>
                <Text style={styles.outgoingencrypt_text}>Select Outgoing Encryption</Text>
                    <View style={{flexDirection:"row"}}>

                        <Picker 
                            selectedValue={selectedFoundations}
                            onValueChange={(itemValue) =>
                            setSelectedFoundations(itemValue)
  }
                            mode={'dropdown'}
                            style={{width:160, marginLeft:245, marginTop:-40, }}
  >
                            <Picker.Item label="NONE" value="NONE" />
                            <Picker.Item label="IMAP" value="IMAP" />
                            <Picker.Item label="POP-3" value="POP-3" />
                           
                        </Picker>  
                    </View>
                        <Text style={styles.outgoingportencrypt_line}>_______________________</Text>
            </View>

            <View style={styles.smtp_text}>
                <Text style={styles.smtp_text}>(SMTP)</Text>
            </View>

            <View>
                <TouchableOpacity  style={styles.cancel} onPress={()=>{alert("Cancel")}}>
                    <Text style={styles.cancel_text}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity  style={styles.ok} onPress={()=>{alert("Ok")}}>
                    <Text style={styles.ok_text}>Ok</Text>
                </TouchableOpacity>
            </View>

        </Fragment>

    )
}

const styles = StyleSheet.create({

    advancesettings:{

        backgroundColor:"#58A2CB",
        fontSize:25,
        textAlign:"center",
        color:"black",
        lineHeight:55,
    },

    incomingport_text:{

        fontSize:20,
        marginTop:25,
        marginLeft:5,
        color:"black",
        fontWeight:"bold",
    },

    incomingportencrypt_line:{

        marginLeft:252,
        marginTop:-15,
        color:"black",
        marginTop:-20,
    },

    incomingport_textfield:{

        marginLeft:230,
        marginTop:-45,
    },

    incomingencrypt_text:{

        fontSize:18,
        marginTop:15,
        marginLeft:3,
        color:"black",
    },

    imap_text:{

        fontSize:18,
        marginTop:-5,
        marginLeft:5,
        color:"black",
        fontWeight:"bold",
    },

    outgoingport_text:{

        fontSize:20,
        marginTop:20,
        marginLeft:5,
        color:"black",
        fontWeight:"bold",
    },
                
    outgoingport_textfield:{
                
        marginLeft:230,
        marginTop:-45,
    },

    outgoingport_textfield:{

        marginLeft:230,
        marginTop:-45,
    },

    outgoingencrypt_text:{

        fontSize:18,
        marginTop:15,
        marginLeft:3,
        color:"black",
    },

    outgoingportencrypt_line:{

        marginLeft:252,
        marginTop:-15,
        color:"black",
        marginTop:-20,
    },

    smtp_text:{

        fontSize:18,
        marginTop:-5,
        marginLeft:5,
        color:"black",
        fontWeight:"bold",
    },

    cancel:{

        borderRadius:25,
        width:"31.5%",
        height:40,
        backgroundColor:"#58A2CB",
        fontSize:50,
        marginTop:75,
        marginLeft:240,
        textAlign:"center",
    },

    cancel_text:{
        width:"50%",    
        height:30,
        fontSize:21,
        color:"black",
        marginTop:5,
        marginLeft:28,
        textAlign:"center",
    },

    ok:{

        borderRadius:25,
        width:"25%",
        height:40,
        backgroundColor:"#58A2CB",
        fontSize:50,
        marginTop:-40,
        marginLeft:40,
        textAlign:"center",
    },

    ok_text:{
        width:"50%",    
        height:30,
        fontSize:21,
        color:"black",
        marginTop:5,
        marginLeft:28,
        textAlign:"center",
    },

});

export default AdvanceSettings