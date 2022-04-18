import React from "react";
import {TouchableOpacity,StyleSheet,View,Text,} from 'react-native';
import { Fragment } from "react/cjs/react.production.min";

const BrowseFiles = () => {
    return (

        <Fragment>

            <View style={styles.browsefiles}>
                <Text style={styles.browsefiles}>Browse Files</Text>
            </View>

            {/* <View>
                <TouchableOpacity   style={styles.documents} onPress={()=>{alert("Documents")}}>
                    <Text style={styles.documents_text}>Documents</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.personal} onPress={()=>{alert("Personal")}}>
                    <Text style={styles.personal_text}>Personal</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.download} onPress={()=>{alert("Download")}}>
                    <Text style={styles.download_text}>Download</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity   style={styles.recent} onPress={()=>{alert("Recent")}}>
                    <Text style={styles.recent_text}>Recent</Text>
                </TouchableOpacity>
            </View> */}

            <View>
                <TouchableOpacity   style={styles.browse_button} onPress={()=>{alert("Browse")}}>
                    <Text style={styles.browse_text}>Browse</Text>
                </TouchableOpacity>
            </View>

        </Fragment>
    )
}

const styles = StyleSheet.create({

    browsefiles:{

        backgroundColor:"#58A2CB",
        fontSize:30,
        textAlign:"center",
        color:"black",
        lineHeight:50,
   },

    browse_button:{

        borderRadius:30,
        width:"40%",
        height:40,
        backgroundColor:"#58A2CB",
        fontSize:50,
        marginTop:350,
        marginLeft:125,
        textAlign:"center",
    },

    browse_text:{

        width:"50%",    
        height:30,
        fontSize:22,
        color:"black",
        marginTop:5,
        marginLeft:40,
        textAlign:"center",
    },

    // documents:{

    //     borderRadius:50,
    //     width:"55%",
    //     height:40,
    //     backgroundColor:"#5CAEEA",
    //     fontSize:50,
    //     marginTop:80,
    //     marginLeft:100,
    //     textAlign:"center",
    // },

    // personal:{

    //     borderRadius:50,
    //     width:"55%",
    //     height:40,
    //     backgroundColor:"#5CAEEA",
    //     fontSize:50,
    //     marginTop:50,
    //     marginLeft:100,
    //     textAlign:"center",
    // },

    // download:{

    //     borderRadius:50,
    //     width:"55%",
    //     height:40,
    //     backgroundColor:"#5CAEEA",
    //     fontSize:50,
    //     marginTop:50,
    //     marginLeft:100,
    //     textAlign:"center",
    // },

    // recent:{

    //     borderRadius:50,
    //     width:"55%",
    //     height:40,
    //     backgroundColor:"#5CAEEA",
    //     fontSize:50,
    //     marginTop:50,
    //     marginLeft:100,
    //     textAlign:"center",
    // },

    // documents_text:{

    //     width:"50%",    
    //     height:30,
    //     fontSize:22,
    //     color:"black",
    //     marginTop:5,
    //     marginLeft:70,
    //     textAlign:"center",
    // },

    // personal_text:{

    //     width:"50%",    
    //     height:30,
    //     fontSize:22,
    //     color:"black",
    //     marginTop:5,
    //     marginLeft:58,
    //     textAlign:"center",
    // },

    // download_text:{

    //     width:"50%",    
    //     height:30,
    //     fontSize:22,
    //     color:"black",
    //     marginTop:5,
    //     marginLeft:65,
    //     textAlign:"center",
    // },

    // recent_text:{

    //     width:"50%",    
    //     height:30,
    //     fontSize:22,
    //     color:"black",
    //     marginTop:5,
    //     marginLeft:50,
    //     textAlign:"center",
    // },

});

export default BrowseFiles