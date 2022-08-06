import React, { useState } from "react";
import { Image, View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import register from '../ApiServices/registerUser'
export default function SignUp({ navigation }) {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [regResult ,setRegResult]=useState('')
    const data = {
        name: UserName,
        password: Password,
    }

    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <Image source={require('../images/smart-edu-nbg.png')} style={styles.img} />
                        <TextInput style={styles.input} placeholder='User Name'
                            value={UserName}
                            onChangeText={(text) => setUserName(text)}
                        />
                        <TextInput style={styles.input} placeholder='Password' secureTextEntry
                            value={Password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    <TouchableOpacity onPress={() => { register(data) }}>
                        <View style={styles.btn2}>
                            <Text style={styles.btn2t}>REGISTER</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{
                        color: 'green',
                        fontWeight: 600,
                        fontSize: '4vmin',
                        paddingTop: 5
                    }}>{resultMsg}</Text>
                    <View style={styles.reg}>
                        <Text style={{ fontSize: '4.2vmin' }}>Already Have An Account?</Text>
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
        width: '50vmin',
        height: '50vmin',
        alignSelf: 'center',
    },
    input: {
        fontSize: '4.6vmin',
        borderWidth: 1,
        borderColor: '#ddd',
        width: '80vw',
        alignSelf: 'center',
        marginTop: 5,
        fontSize: '4vmin',
        outlineStyle: 'none',
        height: '9vmin',
        paddingLeft: 10,
        backgroundColor: '#ddd'
    },
    container: {
        flex: 1,
        height: '100%',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        textAlign: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 1.3 },
        shadowOpacity: 0.1,
        paddingBottom: '20vmin',
        backgroundColor: 'white'
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