import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SignInBtn(SignInFunction,userInfo) {
    return (
        <TouchableOpacity onPress={() => SignInFunction(userInfo)}>
            <View style={styles.btn2}>
                <Text style={styles.btn2t}>SIGN IN</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn2: {
        textAlign: 'center',
        marginTop: 5,
        justifyContent: 'center',
        flex: 1

    },
    btn2t: {
        fontWeight: 500,
        padding: 7,
        width: '80vw',
        fontSize: '4.6vmin',
        backgroundColor: '#2196F3',
        color: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        letterSpacing: 3,
        alignSelf: 'center',

    },
})