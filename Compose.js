import React,{useState} from "react";
import {TouchableOpacity,StyleSheet,View,Text,TextInput,Image} from 'react-native';
import { Fragment } from "react/cjs/react.production.min";
import { Picker } from "@react-native-picker/picker";

const Compose = () => {

    const [selectedFoundation, setSelectedFoundation] = useState();

    return(

        <Fragment>

            <View style={styles.compose_bar}>
                <Text style={styles.compose_bar}> </Text>
            </View>

            <View>
                <Text style={styles.compose_text}>Compose</Text>
            </View>

            <View>
                <Image  style={styles.back_icon} source={require('../assets/back.png')} resizeMode='stretch'/>
            </View>

            <View>
                <TouchableOpacity   style={styles.back_icon} onPress={()=>{alert("Back")}}></TouchableOpacity>
            </View>

            <View>
                <Image  style={styles.attachfiles_icon} source={require('../assets/attachfiles.png')} resizeMode='stretch'/>
            </View>

            <View>
                <TouchableOpacity   style={styles.attachfiles_icon} onPress={()=>{alert("Attach Files")}}></TouchableOpacity>
            </View>

            <View>
                <Image  style={styles.send_icon} source={require('../assets/send.png')} resizeMode='stretch'/>
            </View>

            <View>
                <TouchableOpacity   style={styles.send_icon} onPress={()=>{alert("Send")}}></TouchableOpacity>
            </View>

            <View>
                <Image  style={styles.menubardots_icon} source={require('../assets/menubardots.png')} resizeMode='stretch'/>
            </View>

            <View>
                <TouchableOpacity   style={styles.menubardots_icon} onPress={()=>{alert("Menu")}}></TouchableOpacity>
            </View>

            <View style={styles.from_text}>
                <Text style={styles.from_text}>From</Text>
            </View>

            <View style={{flexDirection:"row"}}>

                        <Picker 
                            selectedValue={selectedFoundation}
                            onValueChange={(itemValue) =>
                            setSelectedFoundation(itemValue)
  }
                            mode={'dropdown'}
                            style={{width:310, marginLeft:100, marginTop:-40, }}
  >
                            <Picker.Item label="sohaib@gmail.com" value="sohaib@gmail.com" />
                            <Picker.Item label="moiz@gmail.com" value="moiz@gmail.com" />
                             
                        </Picker>
                        
                    </View>

            <View style={styles.to_text}>
                <Text style={styles.to_text}>To</Text>
            </View>

            <View style={styles.cc_textfield}>
                <TextInput style={styles.cc_textfield} placeholder='Cc'/>
            </View>

            <View style={styles.bcc_textfield}>
                <TextInput style={styles.bcc_textfield} placeholder='Bcc'/>
            </View>

            <View style={styles.subject_textfield}>
                <TextInput style={styles.subject_textfield} placeholder='Subject'/>
            </View>

            <View style={styles.composeemail_textfield}>
                <TextInput style={styles.composeemail_textfield}  placeholder='Compose email'/>
            </View>

            <View style={styles.fromline}>
                <Text style={styles.fromline}>_______________________________________________________________</Text>
            </View>

            <View>
            <TextInput style={styles.to_textfield} />
            </View>

            <View style={styles.toline}>
                <Text style={styles.toline}>_______________________________________________________________</Text>
            </View>

            <View style={styles.ccline}>
                <Text style={styles.ccline}>_______________________________________________________________</Text>
            </View>

            <View style={styles.bccline}>
                <Text style={styles.bccline}>_______________________________________________________________</Text>
            </View>

            <View style={styles.subjectline}>
                <Text style={styles.subjectline}>_______________________________________________________________</Text>
            </View>

        </Fragment>

    )
}

const styles = StyleSheet.create({

    compose_bar:{

        backgroundColor:"#58A2CB",
        lineHeight:55,
    },

    fromline:{

        color:"black",
        marginTop:-157,
    },

    toline:{

        color:"black",
        marginTop:-48,
    },

    ccline:{

        color:"black",   
        marginTop:5,
    },

    bccline:{

        color:"black",
        marginTop:22,
    },

    subjectline:{

        color:"black",
        marginTop:20,
    },

    compose_text:{

        fontSize:23,
        marginTop:-43,
        marginLeft:70,
        color:"black",
    },

    from_text:{

        fontSize:22,
        marginTop:20,
        marginLeft:7,
        color:"black",
    },

    to_text:{

        fontSize:22,
        marginTop:15,
        marginLeft:7,
        color:"black",
    },

    to_textfield:{

        width:300,
        marginLeft:75,
        marginTop:-130  ,
        // backgroundColor:"#E5E5E5",
        borderRadius:5,
        fontSize:20,
    },

    cc_textfield:{

        // backgroundColor:"#E5E5E5",     
        marginTop:9,
        marginLeft:7,
        fontSize:22,
    },

    bcc_textfield:{

        // backgroundColor:"#E5E5E5",       
        marginTop:4,
        marginLeft:7,
        fontSize:22,
    },

    subject_textfield:{

        // backgroundColor:"#E5E5E5",       
        marginTop:1,
        marginLeft:7,
        fontSize:22,
    },

    composeemail_textfield:{

        // backgroundColor:"#E5E5E5",       
        marginTop:7,
        marginLeft:7,
        fontSize:22,
    },

    back_icon:{

        marginLeft:15,
         marginTop:-37,
         width:30,
         height:25,
    },

    attachfiles_icon:{

        marginLeft:270 ,
         marginTop:-40,
         width:30,
         height:30,
    },

    send_icon:{

        marginLeft:325,
         marginTop:-40,
         width:30,
         height:28,
    },

    menubardots_icon:{

        marginLeft:370,
         marginTop:-40,
         width:30,
         height:30,
    },

});

export default Compose