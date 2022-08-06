import React from "react";
import { Image, View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
export default function Welcome({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.weltxt}>Hey There!</Text>
                    <Text style={styles.weltxt}>Welcome to Smart education</Text>
                    <Image source={require('../images/smart-educ.png')} style={styles.img} />

                    <TouchableOpacity style={{ width: '100%' }}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <View style={styles.btn1}>
                            <Text style={styles.btn1t}>SIGN UP</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '100%' }}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <View style={styles.btn2}>
                            <Text style={styles.btn2t}>SIGN IN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20vmin',
        marginBottom: '20vmin',
        backgroundColor: 'white',

    },
    weltxt: {
        fontWeight: 700,
        textAlign: 'center',
        color: '#41aafa',
        fontSize: '6vmin',
        letterSpacing: 2.4
    },
    img: {
        width: '45vw',
        height: '45vh',
        margin: '2vmin',
        alignSelf: 'center',
        // resizeMode:'contain'
    },
    btn1t: {
        fontWeight: 500,
        padding: 10,
        minWidth: '100%',
        fontSize: '4.6vmin',
        color: 'white',
        letterSpacing: 3

    },
    btn1: {
        backgroundColor: '#2196F3',
        width: '100%',
        textAlign: 'center',

    },
    btn2: {
        width: '100%',
        textAlign: 'center',
        marginTop: 5

    },
    btn2t: {
        fontWeight: 500,
        padding: 10,
        fontSize: '4.6vmin',
        color: '#2196F3',
        borderWidth: 1,
        borderColor: '#ddd',
        letterSpacing: 3

    }
})