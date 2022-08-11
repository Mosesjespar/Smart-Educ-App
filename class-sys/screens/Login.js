import React from "react";
import { Image, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Button } from "react-native-paper";


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
        if (navigator.onLine) {
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
        else{
            setResultMsg('Please Connect to the Internet')
        }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../images/logo.png')} style={styles.img} />

                    <TextInput
                        placeholder="User Name"
                        placeholderTextColor={'#2196F3'}
                        value={UserName}
                        onChangeText={text => setUserName(text)}
                        style={styles.input}

                    />

                    <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor={'#2196F3'}
                    />
                    <Button mode="contained" onPress={() => UserLogin(userInfo)}
                        color={'#2196F3'}
                        labelStyle={{ color: "white", fontSize: 16, letterSpacing: 2, fontWeight: 500 }}
                        contentStyle={{ width: '80vw', paddingTop: 5 }}
                    >
                        SIGN IN
                    </Button>

                    <Text style={{
                        color: 'red',
                        fontWeight: 600,
                        fontSize: '4vmin',
                        marginBottom: 2
                    }}>{resultMsg}</Text>

                    <View style={styles.reg}>
                        <Text style={{ fontSize: '4.2vmin', color: 'white' }}>Don't Have an Account Yet? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={styles.regLink}> Register</Text>
                        </TouchableOpacity>
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
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: '20vmin',
        marginBottom: '20vmin',
        backgroundColor: '#020742',

    },
    img: {
        width: '48vw',
        height: '48vh',
        marginBottom: '2vmin',
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
    }
})