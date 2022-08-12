import React, { useState } from "react";
import { Image, View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import register from '../ApiServices/registerUser'
import { Button } from "react-native-paper";

export default function SignUp({ navigation }) {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [regResult, setRegResult] = useState('')
    const data = {
        name: UserName,
        password: Password,
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image source={require('../images/logo.png')} style={styles.img} />
                        <TextInput style={styles.input} placeholder='User Name'
                            value={UserName}
                            onChangeText={(text) => setUserName(text)}
                            placeholderTextColor={'#2196F3'}
                        />
                        <TextInput style={styles.input} placeholder='Password' secureTextEntry
                            value={Password}
                            onChangeText={(text) => setPassword(text)}
                            placeholderTextColor={'#2196F3'}
                        />
                    </View>

                    <Button mode="contained" onPress={() => register(data)}
                        color={'#2196F3'}
                        labelStyle={{ color: "white", fontSize: 16, letterSpacing: 2, fontWeight: 500 }}
                        contentStyle={{ width: '80vw', paddingTop: 5 }}
                    >
                        REGISTER
                    </Button>
                    <Text style={{
                        color: 'green',
                        fontWeight: 600,
                        fontSize: '4vmin',
                        paddingTop: 5
                    }}>{regResult}</Text>

                    <View style={styles.reg}>
                        <Text style={{ fontSize: '4.2vmin', color: 'white' }}>Already Have An Account? </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignIn')}
                        >
                            <Text style={styles.regLink}> SignIn</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '48vw',
        height: '48vh',
        marginBottom: '2vmin',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: 'transparent',
        borderColor: '#2196F3',
        borderWidth: 1,
        color: '#2196F3',
        borderRadius: 3,
        fontSize: 16,
        letterSpacing: 1.1,
        fontWeight: 400,
        width: '80vw',
        margin: 5,
        height: 40,
        outlineStyle: 'none',
        padding: 10
    },
    container: {
        flex: 1,
        width: '100%',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: '20vmin',
        marginBottom: '20vmin',
        backgroundColor: '#020742'
    },
    reg: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: "center",
        margin: '2vmin'
    },
    regLink: {
        color: '#2196F3',
        fontSize: '4.2vmin',
        fontWeight: 'bold'
    },
})