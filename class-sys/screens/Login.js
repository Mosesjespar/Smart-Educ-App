import React from "react";
import { Image, View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import UserLogin from "../ApiServices/UserLogin";
export const base_url = 'http://127.0.0.1:5000'

export default function SignIn({ navigation }) {
    const [data, setData] = React.useState('n')
    const [UserName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('')
    const [resultMsg, setResultMsg] = React.useState('')
    const userInfo = {
        username: UserName,
        passw: password
    }
    React.useEffect(() => {
        fetch(base_url + '/data'
        ).then(data => data.json()).then(data => { setData(data.age) }).catch(e => console.log('an error: ', e))

    }, [])
    const UserLogin = async (info) => {
        let opts = {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer' + token

            },

        }
        fetch(base_url + '/login', opts
        ).then(response => {
            if (response.status === 200) {
                navigation.navigate('Dashboard', { name: UserName })
                setResultMsg('')
                return (response.json())
            }
            else {
                setResultMsg('Invalid Username or password')
                setPassword('')
                setUserName('')
                return (response.json())
            }
        }
        ).then(data => {
            const tkn = sessionStorage.setItem('token', data.access_token)
            console.log(data)
            setToken(tkn)
        }

        ).catch(e => console.log('error:', e))
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: '5vmin', backgroundColor: 'white', height: '100%' }}>
                    <View style={styles.container}>
                        <Text style={styles.stxt}>{data}</Text>
                        <Image source={require('../images/smart-edu-nbg.png')} style={styles.img} />

                        <TextInput style={styles.input} placeholder='User Name'
                            value={UserName}
                            onChangeText={(text) => setUserName(text)} />

                        <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password}
                            onChangeText={(text) => setPassword(text)} />

                        <TouchableOpacity onPress={() => UserLogin(userInfo)}>
                            <View style={styles.btn2}>
                                <Text style={styles.btn2t}>SIGN IN</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={{
                            color: 'red',
                            fontWeight: 600,
                            fontSize: '4vmin',
                            paddingTop: 5
                        }}>{resultMsg}</Text>

                        <View style={styles.reg}>
                            <Text style={{ fontSize: '4.2vmin' }}>Don't Have an Account Yet?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignUp')}
                            >
                                <Text style={styles.regLink}> Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    stxt: {
        color: '#41aafa',
        fontWeight: 600,
        fontSize: '4.6vmin',
        paddingTop: 5
    },
    img: {
        width: '35vw',
        height: '35vh',
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
    reg: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: "center",
        marginTop: 9,

    },
    regLink: {
        color: '#2196F3',
        fontSize: '4.2vmin',
        fontWeight: 'bold'
    }
})