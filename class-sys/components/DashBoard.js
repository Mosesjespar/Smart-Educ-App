import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";
import { base_url } from "../screens/Login";

export default function Dashboard() {
    
    // const [name, setName] = useState(login_name)

    // setName('Moses')
    // const token = sessionStorage.getItem('token')
    // let opts = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer' + token
    //     },
    //     body: JSON.stringify(loginName),

    // }


    // useEffect(() => {

    // }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Welcome Back </Text>
                    </View>
                    <Form />
                    <Button title="Get Marks" onPress={Get_Marks} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
function Get_Marks() {

    let optss = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'name': 'test' }),
    }
    fetch(base_url + '/get_marks', optss).then(response => response.json()).then(data => console.log(data)).catch(e => console.log('error:', e))
}
function Form() {
    const [mtc, setMtc] = useState('')
    const [sci, setSci] = useState('')
    const [eng, setEng] = useState('')
    const [sst, setSSt] = useState('')
    let data = {
        'UserName': 'test',
        'mtc': mtc,
        'sci': sci,
        'eng': eng,
        'sst': sst
    }
    const opts = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }
    function AddMarks() {
        fetch(base_url + '/add_marks', opts).then(response => {
            if (response.status === 200) {
                console.log(response.json())
                return response.json()
            }
        }

        ).then(data => {
            console.log(data)
            setEng('')
            setMtc('')
            setSSt('')
            setSci('')
        }
        ).catch(e => console.log('error:', e))
    }
    return (
        <View style={{ borderRadius: 5 }}>
            <Text style={{
                textAlign: 'center', textAlign: 'center',
                color: '#2196F3',
                fontWeight: 'bold',
                fontSize: '4.4vmin',
                padding: '3vmin'
            }}>Add Marks</Text>
            <View style={styles.inputView}>
                <Text style={styles.sub}>MTC</Text>
                <TextInput style={styles.input} value={mtc} onChangeText={(text) => setMtc(text)} />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.sub}>SST</Text>
                <TextInput style={styles.input} value={sst} onChangeText={(text) => setSSt(text)} />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.sub}>ENG</Text>
                <TextInput style={styles.input} value={eng} onChangeText={(text) => setEng(text)} />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.sub}>SCI</Text>
                <TextInput style={styles.input} value={sci} onChangeText={(text) => setSci(text)} />
            </View>
            <TouchableOpacity onPress={AddMarks}>
                <View style={styles.btn2}>
                    <Text style={styles.btn2t}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '15vmin',
        padding: 20,
        backgroundColor: '#2196F3',

    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '4.6vmin',
    },
    container: {
        flex: 1,
        height: '100%',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 1.3 },
        shadowOpacity: 0.1,
        paddingBottom: '20vmin',
        backgroundColor: 'white'

    },
    input: {
        fontSize: '4.6vmin',
        borderWidth: 1,
        borderColor: '#2196F3',
        width: '79vw',
        marginTop: 1,
        fontSize: '4vmin',
        outlineStyle: 'none',
        height: '7vmin',
        paddingLeft: 10,
        backgroundColor: '#ddd',
        marginRight: 10
    },
    inputView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2196F3',
        paddingVertical: 5

    },
    sub: {
        marginLeft: 22,
        color: '#fff',
        fontWeight: 500,
        fontSize: '4.3vmin',
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
        width: '100vw',
        fontSize: '4.6vmin',
        backgroundColor: 'white',
        color: '#2196F3',
        borderWidth: 1,
        borderColor: '#2196F3',
        letterSpacing: 3,
        alignSelf: 'center',

    }
});