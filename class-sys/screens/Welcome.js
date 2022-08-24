import React from "react";
import { Image, View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";



export default function Welcome({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.weltxt}>Hey There!</Text>
                    <Text style={styles.weltxt}>Welcome to Smart education</Text>
                    <Image source={require('../images/logo.png')} style={styles.img} />

                    <Text style={styles.weltxt}>You are a...</Text>

                    <LightBlueBtn title='STUDENT' navPress={() => navigation.navigate('studentopts')} />

                    <DarkBlueBtn title='TEACHER' navPress={() => navigation.navigate('teacheropts')} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export function LightBlueBtn(props) {
    return (
        <View style={{ padding: 5, margin: 1 }}>
            <Button mode="contained" onPress={props.navPress}
                color={'#2196F3'}
                labelStyle={{ color: "white", fontSize: 16, letterSpacing: 2, fontWeight: 500 }}
                dark={true}
                contentStyle={{ width: '80vw' }}
            >
                {props.title}
            </Button>
        </View>
    )
}

export function DarkBlueBtn(props) {
    return (
        <View style={{ padding: 5, margin: 1 }}>
            <Button mode="outlined" onPress={props.navPress}
                color={'white'}
                labelStyle={{ color: "#2196F3", fontSize: 16, letterSpacing: 1.2, fontWeight: 500 }}
                contentStyle={{ width: '80vw' }}
                style={{ borderColor: '#2196F3' }}>
                {props.title}
            </Button>
        </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10vmin',
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
        // margin: '1vmin',
        alignSelf: 'center',
        resizeMode: 'cover'
    },

})