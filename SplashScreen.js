import { Rotate90DegreesCcw } from "@material-ui/icons";
import React from "react";
import {StyleSheet,View,Text,Image} from 'react-native';
import { Fragment } from "react/cjs/react.production.min";

const SplashScreen = () => {

    return(
        
        <Fragment>

            <View style={styles.backgroundcolor_screen}>
                <Text style={styles.backgroundcolor_screen}> </Text>
            </View>

            <View>
                <Image  style={styles.pst_icon} source={require('../assets/pst.png')} resizeMode='stretch'/>
            </View>

            <View>
                <Text style={styles.pst_text}>PST Mail Handler</Text>
            </View>

        </Fragment>
    )
}

const styles=StyleSheet.create({

    backgroundcolor_screen:{

        backgroundColor:"#EFEEEE",
        lineHeight:660,
    },

    pst_icon:{

        marginTop:-500,
        marginLeft:75,
        width:250,
        height:180,
    },

    pst_text:{

        marginTop:-200,
        fontSize:30,
        textAlign:"center",
        color:"black",
    }

});

export default SplashScreen