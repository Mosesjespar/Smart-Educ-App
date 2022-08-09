import React from "react";
import { Image, View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
export default function Welcome({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.weltxt}>Hey There!</Text>
                    <Text style={styles.weltxt}>Welcome to Smart education</Text>
                    <Image source={require('../images/logo.png')} style={styles.img} />
                    <View style={styles.btn}>
                        <Button mode="contained" onPress={() => navigation.navigate('SignUp')}
                            color={'#2196F3'}
                            labelStyle={{ color: "white", fontSize: 16, letterSpacing: 2, fontWeight: 500 }}
                            dark={true}
                            contentStyle={{ width: '80vw' }}
                        >
                            Sign Up
                        </Button>
                    </View>
                    <View style={styles.btn}>
                        <Button mode="outlined" onPress={() => navigation.navigate('SignIn')}
                            color={'white'}
                            labelStyle={{ color: "#2196F3", fontSize: 16, letterSpacing: 1.2, fontWeight:500 }}
                            contentStyle={{ width: '80vw' }}
                            style={{borderColor:'#2196F3'}}>
                            Sign In
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        minHeight:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20vmin',
        marginBottom: '20vmin',
        backgroundColor: '#020742',

    },
    weltxt: {
        fontWeight: 700,
        textAlign: 'center',
        color: '#41aafa',
        fontSize: '6vmin',
        letterSpacing: 2.4
    },
    img: {
        width: '48vw',
        height: '48vh',
        margin: '2vmin',
        alignSelf: 'center',
        // resizeMode:'contain'
    },
    btn:{
        padding:5,
        margin:1
    }

})